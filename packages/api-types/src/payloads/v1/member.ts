import type { Snowflake } from "../../common";

export interface APIMember {
  userId: Snowflake;
  channelId: Snowflake;
  permissions: MemberPermissions;
}

export enum MemberPermissions {
  Admin = 1 << 0,
  BanMembers = 1 << 1,
  KickMembers = 1 << 2,
  ManageMessages = 1 << 3,
  ManageChannel = 1 << 4,
  AttachFiles = 1 << 5,
  SendMessages = 1 << 6,
}
