import { APIError, HTTPError } from "./errors";
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

export class REST {
  public client: AxiosInstance;
  public options: RESTOptions;
  private token?: string;

  public constructor(options?: Partial<RESTOptions>) {
    this.client = axios.create();
    this.options = { ...DefaultRESTOptions, ...options } as RESTOptions;
  }

  public setToken(token: string): string {
    return (this.token = token);
  }

  public async get<R = unknown>(
    route: RouteLike,
    options?: RequestOptions<never>,
  ): Promise<R> {
    return this.request<never, R>({
      method: RequestMethod.Get,
      route,
      ...options,
    });
  }

  public async put<B = unknown, R = unknown>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request({ method: RequestMethod.Put, route, ...options });
  }

  public async post<B = unknown, R = unknown>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Post,
      route,

      ...options,
    });
  }

  public async patch<B = unknown, R = unknown>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Patch,
      route,

      ...options,
    });
  }

  public async delete<B = unknown, R = unknown>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      method: RequestMethod.Delete,
      route,

      ...options,
    });
  }

  public async request<B = unknown, R = unknown>(
    options: InternalRequestOptions<B>,
  ): Promise<R> {
    const headers = new AxiosHeaders(options.headers);

    if (this.token && options.useAuth !== false) {
      headers.setAuthorization(
        `${options.authPrefix ?? this.options.authPrefix} ${this.token}`,
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
