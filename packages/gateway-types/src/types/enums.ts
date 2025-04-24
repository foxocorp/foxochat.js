/**
 * Gateway message operation codes.
 */
export enum GatewayOpcodes {
  /**
   * An event was dispatched.
   */
  Dispatch,

  /**
   * Client requests identification.
   */
  Identify,

  /**
   * Gateway acknowledges client identification.
   */
  Hello,

  /**
   * Sends by client to maintain active connection.
   */
  Heartbeat,

  /**
   * Gateway acknowledges client heartbeat.
   */
  HeartbeatAck,
}

/**
 * Close codes of gateway.
 */
export enum GatewayCloseCodes {
  /**
   * Connection closed normally.
   */
  Normal = 1000,

  /**
   * Client unauthenticated.
   */
  Unauthorized = 4000,

  /**
   * Heartbeat interval timed out.
   */
  HeartbeatTimeout,
}

export enum GatewayDispatchEvents {
  /**
   * Message was created.
   */
  MessageCreate = "MESSAGE_CREATE",

  /**
   * Message was edited.
   */
  MessageUpdate = "MESSAGE_UPDATE",

  /**
   * Message was deleted.
   */
  MessageDelete = "MESSAGE_DELETE",

  /**
   * Channel was created.
   */
  ChannelCreate = "CHANNEL_CREATE",

  /**
   * Channel was updated.
   */
  ChannelUpdate = "CHANNEL_UPDATE",

  /**
   * Channel was deleted.
   */
  ChannelDelete = "CHANNEL_DELETE",

  /**
   * Member was added to channel.
   */
  MemberAdd = "MEMBER_ADD",

  /**
   * Member was removed from channel.
   */
  MemberRemove = "MEMBER_REMOVE",

  /**
   * Member was updated.
   */
  MemberUpdate = "MEMBER_UPDATE",
}
