import axios, {
  type AxiosInstance,
  type AxiosResponse,
  AxiosHeaders,
} from "axios";
import type {
  InternalRequestOptions,
  RequestOptions,
  RESTOptions,
  RouteLike,
} from "./types";
import { DefaultRESTOptions, RequestMethod } from "./constants";

export class REST {
  public client: AxiosInstance;
  public options: RESTOptions;

  constructor(options?: Partial<RESTOptions>) {
    this.client = axios.create();
    this.options = { ...DefaultRESTOptions, ...options } as RESTOptions;
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
    const response = await this.client.request<
      R,
      AxiosResponse<R>,
      B | undefined
    >({
      url: options.route,
      data: options.body,
      method: options.method,
      baseURL: this.options.apiBaseURL,
      headers: new AxiosHeaders(options.headers),
    });

    return response.data;
  }
}
