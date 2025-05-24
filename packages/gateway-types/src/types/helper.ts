import type {
  GatewayDispatchMessage,
  GatewayHeartbeatAckMessage,
  GatewayHeartbeatMessage,
  GatewayHelloMessage,
  GatewayIdentifyMessage,
} from '#/messages'
import type { GatewayOpcodes } from './enums'

/**
 * Messages sent from gateway server to client.
 */
export type GatewayClientboundOpcode = GatewayOpcodes.Hello | GatewayOpcodes.HeartbeatAck | GatewayOpcodes.Dispatch

/**
 * Messages sent from client to gateway server.
 */
export type GatewayServerboundOpcode = GatewayOpcodes.Identify | GatewayOpcodes.Heartbeat

/**
 * Message sent from gateway server to client.
 */
export type GatewayClientboundMessage = GatewayHelloMessage | GatewayHeartbeatAckMessage | GatewayDispatchMessage

/**
 * Message sent from client to gateway server.
 */
export type GatewayServerboundMessage = GatewayIdentifyMessage | GatewayHeartbeatMessage
