import type { GatewayHelloPayload, GatewayIdentifyPayload } from '#/payloads'
import type { GatewayOpcodes } from '#/types'
import type { GatewaySimpleMessage } from './base'

/**
 * Used to trigger the hello from the gateway.
 */
export type GatewayIdentifyMessage = GatewaySimpleMessage<GatewayOpcodes.Identify, GatewayIdentifyPayload>

/**
 * Defines the client heartbeat interval.
 */
export type GatewayHelloMessage = GatewaySimpleMessage<GatewayOpcodes.Hello, GatewayHelloPayload>

/**
 * Maintains an active gateway connection.
 */
export type GatewayHeartbeatMessage = GatewaySimpleMessage<GatewayOpcodes.Heartbeat>

/**
 * Gateway acknowledges client heartbeat.
 */
export type GatewayHeartbeatAckMessage = GatewaySimpleMessage<GatewayOpcodes.HeartbeatAck>
