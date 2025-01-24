import { APIError, AuthEnforcedError, HTTPError } from "./errors";
import { DefaultRESTOptions, RequestMethod } from "./constants";
import type {
  InternalRequestOptions,
  RESTOptions,
  RequestOptions,
  RouteLike,
} from "./types";
import axios, {
  AxiosHeaders,
  type AxiosInstance,
  type AxiosResponse,
  HttpStatusCode,
} from "axios";
import type { APIException } from "@foxogram/api-types";

/**
 * The HTTP REST API client for foxogram.js
 */
export class REST {
  /**
   * Internal client sending requests.
   */
  public readonly client: AxiosInstance;

  /**
   * Configuration options for this instance.
   */
  public readonly options: RESTOptions;

  /**
   * A token that should be used for requests.
   */
  private token: string | null = null;

  public constructor(options?: Partial<RESTOptions>) {
    this.client = axios.create();
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
  public async get<R = unknown, Q = unknown>(
    route: RouteLike,
    options?: RequestOptions<never, Q>,
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
  public async put<B = unknown, R = unknown, Q = unknown>(
    route: RouteLike,
    options?: RequestOptions<B, Q>,
  ): Promise<R> {
    return this.request<B, R>({ method: RequestMethod.Put, route, ...options });
  }

  /**
   * Sends a POST request to the API.
   */
  public async post<B = unknown, R = unknown, Q = unknown>(
    route: RouteLike,
    options?: RequestOptions<B, Q>,
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
  public async patch<B = unknown, R = unknown, Q = unknown>(
    route: RouteLike,
    options?: RequestOptions<B, Q>,
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
  public async delete<B = unknown, R = unknown, Q = unknown>(
    route: RouteLike,
    options?: RequestOptions<B, Q>,
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
  public async request<B = unknown, R = unknown>(
    options: InternalRequestOptions<B>,
  ): Promise<R> {
    const headers = new AxiosHeaders(options.headers);

    if (
      !this.token &&
      options.useAuth &&
      (options.enforceAuth || this.options.enforceAuth)
    ) {
      throw new AuthEnforcedError(options.method, options.route);
    }

    if (this.token && options.useAuth !== false) {
      headers.setAuthorization(
        `${options.authPrefix ?? this.options.authPrefix}${this.token}`,
      );
    }

    const response = await this.client.request<
      R,
      AxiosResponse<R>,
      B | undefined
    >({
      baseURL: this.options.baseURL,
      data: options.body,
      headers: headers,
      method: options.method,
      params: options.query,
      url: options.route,
      validateStatus: () => true,
    });

    const data = response.data;
    const status = response.status;

    if (status >= HttpStatusCode.InternalServerError) {
      throw new HTTPError(status, options.method, options.route);
    } else if (status >= HttpStatusCode.BadRequest) {
      throw new APIError(
        status,
        options.method,
        options.route,
        data as APIException,
      );
    }

    return data;
  }
}
