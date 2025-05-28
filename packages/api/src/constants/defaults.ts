import type { APIOptions } from '#/types'
import { RouteUrlsMap } from '@foxogram/api-types'

/**
 * Default options of API client.
 */
export const APIDefaultOptions = {
  rest: {
    baseURL: RouteUrlsMap.production.api,
  },
} as const satisfies APIOptions
