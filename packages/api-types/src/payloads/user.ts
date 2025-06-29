import type { APIAttachment } from '@/payloads/attachment'

/**
 * API User DTO.
 */
export interface APIUser {
  /**
   * The id of the user.
   */
  id: number

  /**
   * The channels of the user.
   */
  channels: number[]

  /**
   * The contacts of the user.
   */
  contacts: number[]

  /**
   * The avatar of the user.
   */
  avatar: APIAttachment | null

  /**
   * The display name of the user.
   */
  display_name: string

  /**
   * The username of the user.
   */
  username: string

  /**
   * The email of the user.
   */
  email: string | null

  /**
   * The status of the user.
   */
  status: UserStatus

  /**
   * The timestamp when the user's status was last updated.
   */
  status_updated_at: number

  /**
   * The flags of the user.
   */
  flags: UserFlags

  /**
   * The type of the user.
   */
  type: UserType

  /**
   * The time when user created at.
   */
  created_at: number
}

/**
 * User entity types.
 */
export enum UserType {
  /**
   * The user is the human?
   */
  User = 1,

  /**
   * The user is the bot.
   */
  Bot = 2,
}

/**
 * Flags of the user.
 */
export enum UserFlags {
  /**
   * The user is awaiting email confirmation.
   */
  AwaitingConfirmation = 1,

  /**
   * The user's email is verified.
   */
  EmailVerified = 2,

  /**
   * The user is disabled.
   */
  Disabled = 4,
}

/**
 * Status of the user.
 */
export enum UserStatus {
  /**
   * The user is online.
   */
  Online = 1,

  /**
   * The user is offline.
   */
  Offline = 2,
}
