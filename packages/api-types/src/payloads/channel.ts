import type { APIAttachment } from './attachment'
import type { APIMessage } from './message'
import type { APIUser } from './user'

/**
 * API Channel DTO.
 */
export interface APIChannel {
  /**
   * The id of the channel.
   */
  id: number

  /**
   * The name of the channel.
   */
  name: string

  /**
   * The display name of the channel.
   */
  display_name: string

  /**
   * The icon of the channel.
   */
  icon?: APIAttachment

  /**
   * The type of the channel.
   */
  type: ChannelType

  /**
   * Amount of members in channel.
   */
  member_count: number

  /**
   * The owner of the channel.
   */
  owner: APIUser

  /**
   * The time when channel created at.
   */
  created_at: number

  /**
   * The last sent message in channel.
   */
  last_message?: APIMessage
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
  Group,

  /**
   * A channel where only administrators can post messages.
   */
  Channel,
}

/**
 * API Member DTO.
 */
export interface APIMember {
  /**
   * The id of the member.
   */
  id: number

  /**
   * The user of the member.
   */
  user: APIUser

  /**
   * The channel of the member.
   */
  channel: APIChannel

  /**
   * The permissions of the member.
   */
  permissions: MemberPermissions

  /**
   * The time when member joined.
   */
  joined_at: number
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
