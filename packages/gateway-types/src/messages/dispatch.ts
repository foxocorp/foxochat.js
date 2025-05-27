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
} from '#/payloads'
import type { GatewayDispatchEvents } from '#/types'
import type { GatewayDispatchMessage } from './base'

/**
 * Message was created.
 */
export type GatewayDispatchMessageCreateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageCreate,
  GatewayDispatchMessageCreatePayload
>

/**
 * Message was edited.
 */
export type GatewayDispatchMessageUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageUpdate,
  GatewayDispatchMessageUpdatePayload
>

/**
 * Message was deleted.
 */
export type GatewayDispatchMessageDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageDelete,
  GatewayDispatchMessageDeletePayload
>

/**
 * Channel was created.
 */
export type GatewayDispatchChannelCreateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelCreate,
  GatewayDispatchChannelCreatePayload
>

/**
 * Channel was updated.
 */
export type GatewayDispatchChannelUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelUpdate,
  GatewayDispatchChannelUpdatePayload
>

/**
 * Channel was deleted.
 */
export type GatewayDispatchChannelDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelDelete,
  GatewayDispatchChannelDeletePayload
>

/**
 * Member was added to channel.
 */
export type GatewayDispatchMemberAddMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberAdd,
  GatewayDispatchMemberAddPayload
>

/**
 * Member was removed from channel.
 */
export type GatewayDispatchMemberRemoveMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberRemove,
  GatewayDispatchMemberRemovePayload
>

/**
 * Member was updated.
 */
export type GatewayDispatchMemberUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberUpdate,
  GatewayDispatchMemberUpdatePayload
>

/**
 * User status was updated.
 */
export type GatewayDispatchUserStatusUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.UserStatusUpdate,
  GatewayDispatchUserStatusUpdatePayload
>

/**
 * User profile was updated.
 */
export type GatewayDispatchUserUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.UserUpdate,
  GatewayDispatchUserUpdatePayload
>

/**
 * Contact was added.
 */
export type GatewayDispatchContactAddMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ContactAdd,
  GatewayDispatchContactAddPayload
>

/**
 * Contact was deleted.
 */
export type GatewayDispatchContactDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ContactDelete,
  GatewayDispatchContactDeletePayload
>

/**
 * User started typing.
 */
export type GatewayDispatchTypingStartMessage<C extends boolean> = GatewayDispatchMessage<
  GatewayDispatchEvents.TypingStart,
  GatewayDispatchTypingStartPayload<C>
>
