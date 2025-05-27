import { APIChannel, APIMember, APIMessage, APIUser, UserStatus } from '@foxogram/api-types'

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
export type GatewayDispatchMessageDeletePayload = APIMessage

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
export type GatewayDispatchChannelDeletePayload = APIChannel

/**
 * Added member.
 */
export type GatewayDispatchMemberAddPayload = APIMember

/**
 * Updated member.
 */
export type GatewayDispatchMemberUpdatePayload = APIMember

/**
 * Removed member.
 */
export type GatewayDispatchMemberRemovePayload = APIMember

/**
 * Typing started.
 */
export interface GatewayDispatchTypingStartPayload<C extends boolean> {
  /**
   * The ID of the user.
   */
  user_id: C extends true ? number : never

  /**
   * The ID of the channel.
   */
  channel_id: number

  /**
   * The timestamp of when typing started.
   */
  timestamp: C extends true ? number : never
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
  user_id: number

  /**
   * The updated status.
   */
  status: UserStatus
}
