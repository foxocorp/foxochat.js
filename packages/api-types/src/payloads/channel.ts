/**
 * API Channel DTO.
 */
export interface APIChannel {
  /**
   * The name of the channel.
   */
  name: string;

  /**
   * The display name of the channel.
   */
  display_name: string;

  /**
   * The icon of the channel.
   */
  icon: string;

  /**
   * The type of the channel.
   */
  type: ChannelType;

  /**
   * The name of the owner of the channel.
   */
  owner: string;

  /**
   * The time when channel created at.
   */
  created_at: number;
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
   * The username of the member.
   */
  username: string;

  /**
   * The channel name of the member.
   */
  channel: string;

  /**
   * The permissions of the member.
   */
  permissions: MemberPermissions;

  /**
   * The time when member joined.
   */
  created_at: number;
}

/**
 * Permissions of the channel member.
 */
export enum MemberPermissions {
  /**
   * Allows all permissions.
   */
  Admin = 1,

  /**
   * Allows banning members.
   */
  BanMembers = 2,

  /**
   * Allows kicking members.
   */
  KickMembers = 4,

  /**
   * Allows for deletion of other users messages.
   */
  ManageMessages = 8,

  /**
   * Allows management and editing of channel.
   */
  ManageChannel = 16,

  /**
   * Allows for uploading images and files.
   */
  AttachFiles = 32,

  /**
   * Allows for sending messages.
   */
  SendMessages = 64,
}
