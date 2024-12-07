import type { Snowflake } from "../common";

/**
 * API Channel DTO.
 */
export interface APIChannel {
  /**
   * The id of the channel.
   */
  id: Snowflake;

  /**
   * The name of the channel.
   */
  name: string;

  /**
   * The type of the channel.
   */
  type: ChannelType;

  /**
   * The id of the owner of the channel.
   */
  ownerId: Snowflake;
}

/**
 * Channel entity types.
 */
export enum ChannelType {
  /**
   * Direct message between users.
   */
  DM = 1,

  /**
   * Direct message between multiple users.
   */
  Group = 2,

  /**
   * A channel where only administrators can post messages.
   */
  Channel = 3,
}

/**
 * API Member DTO.
 */
export interface APIMember {
  /**
   * The user id of the member.
   */
  userId: Snowflake;

  /**
   * The channel id of the member.
   */
  channelId: Snowflake;

  /**
   * The permissions of the member.
   */
  permissions: MemberPermissions;
}

/**
 * Permissions of the channel member.
 */
export enum MemberPermissions {
  /**
   * Allows all permissions.
   */
  Admin = 1 << 0,

  /**
   * Allows banning members.
   */
  BanMembers = 1 << 1,

  /**
   * Allows kicking members.
   */
  KickMembers = 1 << 2,

  /**
   * Allows for deletion of other users messages.
   */
  ManageMessages = 1 << 3,

  /**
   * Allows management and editing of channel.
   */
  ManageChannel = 1 << 4,

  /**
   * Allows for uploading images and files.
   */
  AttachFiles = 1 << 5,

  /**
   * Allows for sending messages.
   */
  SendMessages = 1 << 6,
}
