import axios, { type AxiosInstance, AxiosHeaders } from "axios";
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

  constructor(options: Partial<RESTOptions>) {
    this.options = { ...DefaultRESTOptions, ...options } as RESTOptions;
    this.client = axios.create();
  }

  public async get(
    route: RouteLike,
    options?: RequestOptions,
  ): Promise<unknown> {
    return this.request({ route, method: RequestMethod.Get, ...options });
  }

  public async put(
    route: RouteLike,
    options?: RequestOptions,
  ): Promise<unknown> {
    return this.request({ route, method: RequestMethod.Put, ...options });
  }

  public async post(
    route: RouteLike,
    options?: RequestOptions,
  ): Promise<unknown> {
    return this.request({ route, method: RequestMethod.Post, ...options });
  }

  public async patch(
    route: RouteLike,
    options?: RequestOptions,
  ): Promise<unknown> {
    return this.request({ route, method: RequestMethod.Patch, ...options });
  }

  public async delete(
    route: RouteLike,
    options?: RequestOptions,
  ): Promise<unknown> {
    return this.request({ route, method: RequestMethod.Delete, ...options });
  }

  public async request(options: InternalRequestOptions): Promise<unknown> {
    const response = await this.client.request({
      url: options.route,
      data: options.body,
      method: options.method,
      baseURL: this.options.apiBaseURL,
      headers: new AxiosHeaders(options.headers),
    });

    return response.data;
  }
}
