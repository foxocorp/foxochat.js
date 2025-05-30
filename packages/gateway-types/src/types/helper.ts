import type {
  GatewayDispatchMessageUnion,
  GatewayHeartbeatAckMessage,
  GatewayHeartbeatMessage,
  GatewayHelloMessage,
  GatewayIdentifyMessage,
} from '@/messages'
import type { GatewayDispatchEvents, GatewayOpcodes } from './enums'
import type {
  GatewayDispatchChannelCreatePayload,
  GatewayDispatchChannelDeletePayload,
  GatewayDispatchChannelUpdatePayload,
  GatewayDispatchContactAddPayload,
  GatewayDispatchContactDeletePayload,
  GatewayDispatchMemberAddPayload,
  GatewayDispatchMemberRemovePayload,
  GatewayDispatchMemberUpdatePayload,
  GatewayDispatchMessageCreatePayload,
  GatewayDispatchMessageDeletePayload,
  GatewayDispatchMessageUpdatePayload,
  GatewayDispatchTypingStartPayload,
  GatewayDispatchUserStatusUpdatePayload,
  GatewayDispatchUserUpdatePayload,
} from '@/payloads'

/**
 * Dispatch payload mappings of messages sent from gateway server to client.
 */
export interface GatewayClientboundDispatchPayloadsMap {
  [GatewayDispatchEvents.MessageUpdate]: GatewayDispatchMessageUpdatePayload
  [GatewayDispatchEvents.MessageCreate]: GatewayDispatchMessageCreatePayload
  [GatewayDispatchEvents.MessageDelete]: GatewayDispatchMessageDeletePayload
  [GatewayDispatchEvents.ChannelCreate]: GatewayDispatchChannelCreatePayload
  [GatewayDispatchEvents.ChannelUpdate]: GatewayDispatchChannelUpdatePayload
  [GatewayDispatchEvents.ChannelDelete]: GatewayDispatchChannelDeletePayload
  [GatewayDispatchEvents.MemberAdd]: GatewayDispatchMemberAddPayload
  [GatewayDispatchEvents.MemberRemove]: GatewayDispatchMemberRemovePayload
  [GatewayDispatchEvents.MemberUpdate]: GatewayDispatchMemberUpdatePayload
  [GatewayDispatchEvents.UserStatusUpdate]: GatewayDispatchUserStatusUpdatePayload
  [GatewayDispatchEvents.UserUpdate]: GatewayDispatchUserUpdatePayload
  [GatewayDispatchEvents.ContactAdd]: GatewayDispatchContactAddPayload
  [GatewayDispatchEvents.ContactDelete]: GatewayDispatchContactDeletePayload
  [GatewayDispatchEvents.TypingStart]: GatewayDispatchTypingStartPayload<true>
}

/**
 * Dispatch payload mappings of messages sent from client to gateway server.
 */
export interface GatewayServerboundDispatchPayloadsMap {
  [GatewayDispatchEvents.TypingStart]: GatewayDispatchTypingStartPayload<false>
}

/**
 * Opcodes of messages sent from gateway server to client.
 */
export type GatewayClientboundOpcode = GatewayOpcodes.Hello | GatewayOpcodes.HeartbeatAck | GatewayOpcodes.Dispatch

/**
 * Opcodes of messages sent from client to gateway server.
 */
export type GatewayServerboundOpcode = GatewayOpcodes.Identify | GatewayOpcodes.Heartbeat | GatewayOpcodes.Dispatch

/**
 * Message sent from gateway server to client.
 */
export type GatewayClientboundMessage =
  | GatewayHelloMessage
  | GatewayHeartbeatAckMessage
  | GatewayDispatchMessageUnion<GatewayClientboundDispatchPayloadsMap>

/**
 * Message sent from client to gateway server.
 */
export type GatewayServerboundMessage =
  | GatewayIdentifyMessage
  | GatewayHeartbeatMessage
  | GatewayDispatchMessageUnion<GatewayServerboundDispatchPayloadsMap>
