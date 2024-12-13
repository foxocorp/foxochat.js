import axios, {
  type AxiosInstance,
  type AxiosResponse,
  AxiosHeaders,
  HttpStatusCode,
} from "axios";
import type {
  InternalRequestOptions,
  RequestOptions,
  RESTOptions,
  RouteLike,
} from "./types";
import { DefaultRESTOptions, RequestMethod } from "./constants";
import { APIError, HTTPError } from "./errors";
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

  public async get<R = any>(
    route: RouteLike,
    options?: RequestOptions<never>,
  ): Promise<R> {
    return this.request<never, R>({
      route,
      method: RequestMethod.Get,
      ...options,
    });
  }

  public async put<B = any, R = any>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request({ route, method: RequestMethod.Put, ...options });
  }

  public async post<B = any, R = any>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      route,
      method: RequestMethod.Post,
      ...options,
    });
  }

  public async patch<B = any, R = any>(
    route: RouteLike,
    options?: RequestOptions<B>,
  ): Promise<R> {
    return this.request<B, R>({
      route,
      method: RequestMethod.Patch,
      ...options,
    });
  }

  public async delete<R = any>(
    route: RouteLike,
    options?: RequestOptions<never>,
  ): Promise<R> {
    return this.request<never, R>({
      route,
      method: RequestMethod.Delete,
      ...options,
    });
  }

  public async request<B = any, R = any>(
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
      url: options.route,
      data: options.body,
      method: options.method,
      baseURL: this.options.baseURL,
      headers: headers,
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
