export interface GatewayOptions {
  /**
   * The base URL used to connect to the Foxogram gateway server.
   */
  url: string;

  /**
   * A factory function used to create WebSocket instance.
   */
  websocket(...args: ConstructorParameters<typeof WebSocket>): WebSocket;

  /**
   * Whether the client should attempt to reconnect automatically
   * after a disconnection.
   */
  reconnect: boolean;

  /**
   * Timeout in milliseconds before attempting to reconnect.
   */
  reconnectTimeout: number;
}

export interface GatewayDestroyOptions {
  /**
   * The code used when closing the connection.
   */
  code?: number;

  /**
   * Indicates whether the client should try to reconnect after destroy.
   */
  reconnect?: boolean;
}
