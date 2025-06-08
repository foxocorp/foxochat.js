import type { Options } from '@/types'
import { RouteUrlsMap } from '@foxochat/api-types'

export const DefaultOptions = {
  url: RouteUrlsMap.production.gateway,
  websocket: (...args) => new WebSocket(...args),
  reconnect: true,
  reconnectTimeout: 500,
} as const satisfies Options
