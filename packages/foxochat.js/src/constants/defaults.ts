import type { Options } from '@/types'
import { RouteUrlsMap } from '@foxochatjs/api-types'

/**
 * Default options of client.
 */
export const DefaultOptions = {
  api: {},
  gateway: {},
  mediaBaseUrl: RouteUrlsMap.production.media,
} as const satisfies Options
