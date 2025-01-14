import type { APIChannel, APIMember, APIMessage } from "@foxogram/api-types";

/**
 * Created message.
 */
export type GatewayDispatchMessageCreatePayload = APIMessage;

/**
 * Updated message.
 */
export type GatewayDispatchMessageUpdatePayload = APIMessage;

/**
 * Deleted message.
 */
export type GatewayDispatchMessageDeletePayload = APIMessage;

/**
 * Created channel.
 */
export type GatewayDispatchChannelCreatePayload = APIChannel;

/**
 * Updated channel.
 */
export type GatewayDispatchChannelUpdatePayload = APIChannel;

/**
 * Deleted channel.
 */
export type GatewayDispatchChannelDeletePayload = APIChannel;

/**
 * Added member.
 */
export type GatewayDispatchMemberAddPayload = APIMember;

/**
 * Updated member.
 */
export type GatewayDispatchMemberUpdatePayload = APIMember;

/**
 * Removed member.
 */
export type GatewayDispatchMemberRemovePayload = APIMember;
