import type { RESTOptions } from '#/types'
import { RouteUrlsMap } from '@foxogram/api-types'

/**
 * Default options of REST client.
 */
export const DefaultRESTOptions = {
  authPrefix: 'Bearer ',
  baseURL: RouteUrlsMap.production.api,
  enforceAuth: false,
  request: (url, init) => fetch(url, init),
} as const satisfies RESTOptions
