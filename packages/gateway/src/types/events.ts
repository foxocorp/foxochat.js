import type { GatewayClientboundMessage } from '@foxogram/gateway-types'
import type { GatewayEvents } from '#/constants'

export interface HeartbeatStats {
  ackAt: number
  heartbeatAt: number
}

export interface GatewayEventsMap {
  [GatewayEvents.Closed]: [code: number]
  [GatewayEvents.Hello]: []
  [GatewayEvents.Dispatch]: [message: GatewayClientboundMessage]
  [GatewayEvents.HeartbeatComplete]: [stats: HeartbeatStats]
  [GatewayEvents.Debug]: [message: string]
  [GatewayEvents.SocketError]: [event: Event]
}
