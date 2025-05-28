import type { GatewayOptions } from '#/types'
import { RouteUrlsMap } from '@foxogram/api-types'

export const GatewayDefaultOptions = {
  url: RouteUrlsMap.production.gateway,
  websocket: (...args) => new WebSocket(...args),
  reconnect: true,
  reconnectTimeout: 500,
} as const satisfies GatewayOptions
