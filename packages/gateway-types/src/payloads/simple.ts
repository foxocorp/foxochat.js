export interface GatewayIdentifyPayload {
  token: string;
}

export interface GatewayHelloPayload {
  heartbeat_interval: number;
}
