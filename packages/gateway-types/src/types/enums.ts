export enum GatewayOpcodes {
  Dispatch = 0,
  Identify = 1,
  Hello = 2,
  Heartbeat = 3,
  HeartbeatAck = 4,
}

export enum GatewayCloseCodes {
  Unauthorized = 4000,
  HeartbeatTimeout = 4001,
}

export enum GatewayDispatchEvents {
  MessageCreate = "MESSAGE_CREATE",
  MessageUpdate = "MESSAGE_UPDATE",
  MessageDelete = "MESSAGE_DELETE",
  ChannelCreate = "CHANNEL_CREATE",
  ChannelUpdate = "CHANNEL_UPDATE",
  ChannelDelete = "CHANNEL_DELETE",
  MemberAdd = "MEMBER_ADD",
  MemberRemove = "MEMBER_REMOVE",
  MemberUpdate = "MEMBER_UPDATE",
}
