/**
 * Used to trigger the hello from the gateway.
 */
export interface GatewayIdentifyPayload {
  /**
   * Authentication token.
   */
  token: string
}

/**
 * Defines the client heartbeat interval.
 */
export interface GatewayHelloPayload {
  /**
   * The interval the client should heartbeat with.
   */
  heartbeat_interval: number
}
