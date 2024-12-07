import type { Snowflake } from "../common";

/**
 * API User DTO.
 */
export interface APIUser {
  /**
   * The id of the user.
   */
  id: Snowflake;

  /**
   * The avatar of the user.
   */
  avatar: string;

  /**
   * The display name of the user.
   */
  displayName: string;

  /**
   * The username of the user.
   */
  username: string;

  /**
   * The email of the user.
   */
  email: string | null;

  /**
   * The flags of the user.
   */
  flags: UserFlags;

  /**
   * The type of the user.
   */
  type: UserType;
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

  AwaitingConfirmation = 1 << 0,
  /**
   * The MFA is enabled.
   */
  MFAEnabled = 1 << 1,

  /**
   * The user's email is verified.
   */
  EmailVerified = 1 << 2,

  /**
   * The user is disabled.
   */
  Disabled = 1 << 3,
}

export interface APIMFAKey {
  key: string;
}
