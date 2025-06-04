import { APIError, AuthEnforcedError, HTTPError } from './errors'
import { DefaultOptions, RequestBodyType, RequestMethod } from './constants'
import type {
  InternalRequestOptions,
  Options,
  RequestHeaders,
  RequestOptions,
  RouteLike,
  ConstructorOptions,
} from './types'
import type { APIException } from '@foxogram/api-types'
import { parseResponse } from './utils'

/**
 * The HTTP REST API client for foxogram.js
 */
export default class REST {
  /**
   * Configuration options for this instance.
   */
  public readonly options: Options

  /**
   * A token that should be used for requests.
   */
  public accessor token: string | null = null

  public constructor(options: ConstructorOptions) {
    this.options = { ...DefaultOptions, ...options } as Options
  }

  /**
   * Sends a GET request to the API.
   */
  public async get<R>(route: RouteLike, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: RequestMethod.Get,
      route,
      ...options,
    })
  }

  /**
   * Sends a PUT request to the API.
   */
  public async put<R>(route: RouteLike, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: RequestMethod.Put,
      route,
      ...options,
    })
  }

  /**
   * Sends a POST request to the API.
   */
  public async post<R>(route: RouteLike, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: RequestMethod.Post,
      route,
      ...options,
    })
  }

  /**
   * Sends a PATCH request to the API.
   */
  public async patch<R>(route: RouteLike, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: RequestMethod.Patch,
      route,
      ...options,
    })
  }

  /**
   * Sends a DELETE request to the API.
   */
  public async delete<R>(route: RouteLike, options?: RequestOptions): Promise<R> {
    return this.request<R>({
      method: RequestMethod.Delete,
      route,
      ...options,
    })
  }

  /**
   * Sends a request to the API.
   */
  private async request<R>(options: InternalRequestOptions): Promise<R> {
    const url = new URL(`${this.options.baseURL}${options.route}`)

    if (options.params) {
      url.search = options.params.toString()
    }

    const commonHeaders: RequestHeaders = {}
    const additionalHeaders: Record<string, string> = {}

    const authRequired = options.useAuth && (options.enforceAuth || this.options.enforceAuth)

    if (authRequired && !this.token) {
      throw new AuthEnforcedError(options.method, options.route)
    }

    if (this.token && options.useAuth !== false) {
      commonHeaders.Authorization = `${options.authPrefix ?? this.options.authPrefix}${this.token}`
    }

    let body: RequestInit['body']
    if (options.body) {
      switch (options.bodyType) {
        case RequestBodyType.init:
          body = options.body as BodyInit

          break
        case RequestBodyType.json:
        default:
          additionalHeaders['Content-Type'] = 'application/json'

          body = JSON.stringify(options.body)

          break
      }
    }

    const response = await this.options.request(url, {
      body: options.method == RequestMethod.Get ? null : (body ?? null),
      headers: {
        ...commonHeaders,
        ...additionalHeaders,
        ...options.headers,
      },
      method: options.method,
    })

    const status = response.status
    const data = await parseResponse(response)

    if (response.status >= 500) {
      throw new HTTPError(status, options.method, options.route)
    } else if (status >= 400) {
      throw new APIError(status, options.method, options.route, data as APIException)
    }

    return data as R
  }
}
