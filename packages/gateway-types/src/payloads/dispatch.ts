import type { APIChannel, APIMember, APIMessage } from "@foxogram/api-types";

export type GatewayDispatchMessageCreatePayload = APIMessage;
export type GatewayDispatchMessageUpdatePayload = APIMessage;
export type GatewayDispatchMessageDeletePayload = APIMessage;

export type GatewayDispatchChannelCreatePayload = APIChannel;
export type GatewayDispatchChannelUpdatePayload = APIChannel;
export type GatewayDispatchChannelDeletePayload = APIChannel;

export type GatewayDispatchMemberAddPayload = APIMember;
export type GatewayDispatchMemberUpdatePayload = APIMember;
export type GatewayDispatchMemberRemovePayload = APIMember;
