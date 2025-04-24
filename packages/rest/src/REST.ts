import { APIError, AuthEnforcedError, HTTPError } from "./errors";
import {
  DefaultRESTOptions,
  RequestBodyType,
  RequestMethod,
} from "./constants";
import type {
  RequestBody,
  InternalRequestOptions,
  RESTOptions,
  RequestHeaders,
  RequestOptions,
  RouteLike,
} from "./types";
import type { APIException } from "@foxogram/api-types";
import { parseResponse } from "./utils";

/**
 * The HTTP REST API client for foxogram.js
 */
export class REST {
  /**
   * Configuration options for this instance.
   */
  public readonly options: RESTOptions;

  /**
   * A token that should be used for requests.
   */
  private token: string | null = null;

  public constructor(options?: Partial<RESTOptions>) {
    this.options = { ...DefaultRESTOptions, ...options } as RESTOptions;
  }

  /**
   * Sets the authorization token that should be used for requests.
   */
  public setToken(token: string | null): string | null {
    return (this.token = token);
  }

  /**
   * Sends a GET request to the API.
   */
  public async get<R>(
    route: RouteLike,
    options?: RequestOptions<never>,
  ): Promise<R> {
    return this.request<never, R>({
      method: RequestMethod.Get,
      route,
      ...options,
    });
  }

  /**
   * Sends a PUT request to the API.
   */
  public async put<B extends RequestBody, R>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Put,
      route,
      ...options,
    });
  }

  /**
   * Sends a POST request to the API.
   */
  public async post<B extends RequestBody, R>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Post,
      route,
      ...options,
    });
  }

  /**
   * Sends a PATCH request to the API.
   */
  public async patch<B extends RequestBody, R>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Patch,
      route,
      ...options,
    });
  }

  /**
   * Sends a DELETE request to the API.
   */
  public async delete<B extends RequestBody, R>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Delete,
      route,
      ...options,
    });
  }

  /**
   * Sends a request to the API.
   */
  public async request<B extends RequestBody, R>(
    options: InternalRequestOptions<B>,
  ): Promise<R> {
    const url = new URL(`${this.options.baseURL}${options.route}`);

    if (options.params) {
      url.search = options.params.toString();
    }

    const commonHeaders: RequestHeaders = {};
    const additionalHeaders: Record<string, string> = {};

    const authRequired =
      options.useAuth && (options.enforceAuth || this.options.enforceAuth);

    if (authRequired && !this.token) {
      throw new AuthEnforcedError(options.method, options.route);
    }

    if (this.token && options.useAuth !== false) {
      commonHeaders.Authorization = `${options.authPrefix ?? this.options.authPrefix}${this.token}`;
    }

    let body: RequestInit["body"];
    if (options.body) {
      switch (options.bodyType) {
        case RequestBodyType.init:
          body = options.body as BodyInit;

          break;
        case RequestBodyType.json:
        default:
          additionalHeaders["Content-Type"] = "application/json";

          body = JSON.stringify(options.body);

          break;
      }
    }

    const response = await this.options.request(url, {
      body: options.method == RequestMethod.Get ? null : body!,
      method: options.method,
      headers: {
        ...commonHeaders,
        ...additionalHeaders,
        ...options.headers,
      },
    });

    const status = response.status;
    const data = await parseResponse(response);

    if (response.status >= 500) {
      throw new HTTPError(status, options.method, options.route);
    } else if (status >= 400) {
      throw new APIError(
        status,
        options.method,
        options.route,
        data as APIException,
      );
    }

    return data as R;
  }
}
