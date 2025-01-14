import type {
  GatewayDispatchChannelCreatePayload,
  GatewayDispatchChannelDeletePayload,
  GatewayDispatchChannelUpdatePayload,
  GatewayDispatchMemberAddPayload,
  GatewayDispatchMemberRemovePayload,
  GatewayDispatchMemberUpdatePayload,
  GatewayDispatchMessageCreatePayload,
  GatewayDispatchMessageDeletePayload,
  GatewayDispatchMessageUpdatePayload,
} from "../payloads";
import type { GatewayDispatchEvents } from "../types";
import type { GatewayDispatchMessage } from "./base";

/**
 * Message was created.
 */
export type GatewayDispatchMessageCreateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageCreate,
  GatewayDispatchMessageCreatePayload
>;

/**
 * Message was edited.
 */
export type GatewayDispatchMessageUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageUpdate,
  GatewayDispatchMessageUpdatePayload
>;

/**
 * Message was deleted.
 */
export type GatewayDispatchMessageDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageDelete,
  GatewayDispatchMessageDeletePayload
>;

/**
 * Channel was created.
 */
export type GatewayDispatchChannelCreateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelCreate,
  GatewayDispatchChannelCreatePayload
>;

/**
 * Channel was updated.
 */
export type GatewayDispatchChannelUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelUpdate,
  GatewayDispatchChannelUpdatePayload
>;

/**
 * Channel was deleted.
 */
export type GatewayDispatchChannelDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelDelete,
  GatewayDispatchChannelDeletePayload
>;

/**
 * Member was added to channel.
 */
export type GatewayDispatchMemberAddMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberAdd,
  GatewayDispatchMemberAddPayload
>;

/**
 * Member was removed from channel.
 */
export type GatewayDispatchMemberRemoveMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberRemove,
  GatewayDispatchMemberRemovePayload
>;

/**
 * Member was updated.
 */
export type GatewayDispatchMemberUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberUpdate,
  GatewayDispatchMemberUpdatePayload
>;
