import type { GatewayMessage } from "../messages";
import type { GatewayOpcodes } from "./enums";

export type GatewayClientboundOpcode =
  | GatewayOpcodes.Hello
  | GatewayOpcodes.HeartbeatAck
  | GatewayOpcodes.Dispatch;

export type GatewayServerboundOpcode =
  | GatewayOpcodes.Identify
  | GatewayOpcodes.Heartbeat;

export type GatewayClientboundMessage = Omit<GatewayMessage, "op"> & {
  op: GatewayClientboundOpcode;
};

export type GatewayServerboundMessage = Omit<GatewayMessage, "op"> & {
  op: GatewayServerboundMessage;
};
