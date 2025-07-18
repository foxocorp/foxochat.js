import type { Options } from '@/types'
import { RouteUrlsMap } from '@foxochatjs/api-types'

/**
 * Default options of API client.
 */
export const DefaultOptions = {
  rest: {
    baseURL: RouteUrlsMap.production.api,
  },
} as const satisfies Options
