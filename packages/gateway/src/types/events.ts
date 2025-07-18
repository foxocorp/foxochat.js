import type {
  GatewayClientboundDispatchPayloadsMap,
  GatewayDispatchMessageUnion,
  GatewayHeartbeatAckMessage,
  GatewayHelloMessage,
} from '@foxochatjs/gateway-types'
import type { GatewayEvents } from '@/constants'

export interface HeartbeatStats {
  ackAt: number
  heartbeatAt: number
}

export interface GatewayEventsMap {
  [GatewayEvents.Closed]: [code: number]
  [GatewayEvents.Hello]: [message: GatewayHelloMessage]
  [GatewayEvents.Dispatch]: [message: GatewayDispatchMessageUnion<GatewayClientboundDispatchPayloadsMap>]
  [GatewayEvents.HeartbeatComplete]: [message: GatewayHeartbeatAckMessage, stats: HeartbeatStats]
  [GatewayEvents.Debug]: [message: string]
  [GatewayEvents.SocketError]: [event: Event]
}
