import type {
    GatewayDispatchChannelCreatePayload,
    GatewayDispatchChannelDeletePayload,
    GatewayDispatchChannelUpdatePayload,
    GatewayDispatchMemberAddPayload,
    GatewayDispatchMemberRemovePayload, GatewayDispatchMemberUpdatePayload,
    GatewayDispatchMessageCreatePayload,
    GatewayDispatchMessageDeletePayload,
    GatewayDispatchMessageUpdatePayload,
} from "../payloads";
import type { GatewayDispatchEvents } from "../types";
import type { GatewayDispatchMessage } from "./base";

export type GatewayDispatchMessageCreateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageCreate,
  GatewayDispatchMessageCreatePayload
>;

export type GatewayDispatchMessageUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageUpdate,
  GatewayDispatchMessageUpdatePayload
>;

export type GatewayDispatchMessageDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MessageDelete,
  GatewayDispatchMessageDeletePayload
>;

export type GatewayDispatchChannelCreateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelCreate,
  GatewayDispatchChannelCreatePayload
>;

export type GatewayDispatchChannelUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelUpdate,
  GatewayDispatchChannelUpdatePayload
>;

export type GatewayDispatchChannelDeleteMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.ChannelDelete,
  GatewayDispatchChannelDeletePayload
>;

export type GatewayDispatchMemberAddMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberAdd,
  GatewayDispatchMemberAddPayload
>;

export type GatewayDispatchMemberRemoveMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberRemove,
  GatewayDispatchMemberRemovePayload
>;

export type GatewayDispatchMemberUpdateMessage = GatewayDispatchMessage<
  GatewayDispatchEvents.MemberUpdate,
  GatewayDispatchMemberUpdatePayload
>;
