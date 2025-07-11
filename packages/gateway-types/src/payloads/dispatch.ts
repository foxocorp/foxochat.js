import type { APIChannel, APIMember, APIMessage, APIUser, Id, Timestamp, UserStatus } from '@foxochat/api-types'

/**
 * Created message.
 */
export type GatewayDispatchMessageCreatePayload = APIMessage

/**
 * Updated message.
 */
export type GatewayDispatchMessageUpdatePayload = APIMessage

/**
 * Deleted message.
 */
export interface GatewayDispatchMessageDeletePayload {
  /**
   * The id of the message.
   */
  id: Id
}

/**
 * Created channel.
 */
export type GatewayDispatchChannelCreatePayload = APIChannel

/**
 * Updated channel.
 */
export type GatewayDispatchChannelUpdatePayload = APIChannel

/**
 * Deleted channel.
 */
export interface GatewayDispatchChannelDeletePayload {
  /**
   * The id of the channel.
   */
  id: Id
}

/**
 * Added member.
 */
export type GatewayDispatchMemberAddPayload = APIMember

/**
 * Removed member.
 */
export type GatewayDispatchMemberRemovePayload = APIMember

/**
 * Typing started.
 */
export interface GatewayDispatchTypingStartPayload<Clientbound extends boolean> {
  /**
   * The ID of the user.
   */
  user_id: Clientbound extends true ? Id : never

  /**
   * The ID of the channel.
   */
  channel_id: Id

  /**
   * The timestamp of when typing started.
   */
  timestamp: Clientbound extends true ? Timestamp : never
}

/**
 * User updated.
 */
export type GatewayDispatchUserUpdatePayload = APIUser

/**
 * Contact added.
 */
export type GatewayDispatchContactAddPayload = APIUser

/**
 * Contact deleted.
 */
export type GatewayDispatchContactDeletePayload = APIUser

/**
 * User status updated.
 */
export interface GatewayDispatchUserStatusUpdatePayload {
  /**
   * The ID of the user.
   */
  user_id: Id

  /**
   * The updated status.
   */
  status: UserStatus
}
