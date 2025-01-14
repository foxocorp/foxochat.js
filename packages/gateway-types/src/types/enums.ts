/**
 * Gateway message operation codes.
 */
export enum GatewayOpcodes {
  /**
   * An event was dispatched.
   */
  Dispatch = 0,

  /**
   * Client requests identification.
   */
  Identify = 1,

  /**
   * Gateway acknowledges client identification.
   */
  Hello = 2,

  /**
   * Sends by client to maintain active connection.
   */
  Heartbeat = 3,

  /**
   * Gateway acknowledges client heartbeat.
   */
  HeartbeatAck = 4,
}

/**
 * Close codes of gateway.
 */
export enum GatewayCloseCodes {
  /**
   * Client unauthenticated.
   */
  Unauthorized = 4000,

  /**
   * Heartbeat interval timed out.
   */
  HeartbeatTimeout = 4001,
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
