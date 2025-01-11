import type { GatewayHelloPayload, GatewayIdentifyPayload } from "../payloads";
import type { GatewayOpcodes } from "../types";
import type { GatewaySimpleMessage } from "./base";

export type GatewayIdentifyMessage = GatewaySimpleMessage<
  GatewayOpcodes.Identify,
  GatewayIdentifyPayload
>;

export type GatewayHelloMessage = GatewaySimpleMessage<
  GatewayOpcodes.Hello,
  GatewayHelloPayload
>;

export type GatewayHeartbeatMessage =
  GatewaySimpleMessage<GatewayOpcodes.Heartbeat>;

export type GatewayHeartbeatAckMessage =
  GatewaySimpleMessage<GatewayOpcodes.HeartbeatAck>;
