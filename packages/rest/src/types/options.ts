import type { ResponseLike } from './http'
import type { MarkRequired } from 'ts-essentials'

/**
 * All options to be passed when creating the REST client instance.
 */
export interface Options {
  /**
   * The base API url.
   */
  baseURL: string

  /**
   * The authorization prefix to use for requests.
   */
  authPrefix: string

  /**
   * Enforces authorization token requirement in auth required endpoints.
   */
  enforceAuth: boolean

  /**
   * The method called to perform the HTTP requests.
   */
  request(url: RequestInfo | URL, init: RequestInit): Promise<ResponseLike>
}

/**
 * Required options to be passed when creating the REST client instance.
 */
export type ConstructorOptions = MarkRequired<Partial<Options>, 'baseURL'>
