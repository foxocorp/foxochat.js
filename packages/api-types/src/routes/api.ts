import type { Snowflake } from "../common";

/**
 * The key of current user.
 */
export type UserMe = "@me";

/**
 * The key of the user.
 *
 * Can be username, user id or \@me.
 */
export type UserKey = Snowflake | UserMe | string;

/**
 * The key of the member.
 *
 * Can be user id or \@me.
 */
export type MemberKey = Snowflake | UserMe;

/**
 * The routes of API.
 */
export const APIRoutes = {
  /**
   * Route for:
   * - POST /auth/login
   */
  authLogin() {
    return "/auth/login" as const;
  },

  /**
   * Route for:
   * - POST /auth/register
   */
  authRegister() {
    return "/auth/register" as const;
  },

  /**
   * Route for:
   * - POST /auth/email/resend
   */
  authResendEmail() {
    return "/auth/email/resend" as const;
  },

  /**
   * Route for:
   * - POST /auth/email/verify/{code}
   */
  authVerifyEmail(code: string) {
    return `/auth/email/verify/${code}` as const;
  },

  /**
   * Route for:
   - GET    /channels/{id}
   - PATCH  /channels/{id}
   - DELETE /channels/{id}
   */
  channel(channelId: Snowflake) {
    return `/channels/${channelId}` as const;
  },

  /**
   * Route for:
   * - POST /channels/
   */
  channels() {
    return "/channels" as const;
  },

  /**
   * Route for:
   * - GET    /channels/{id}/members/{memberId}
   * - PUT    /channels/{id}/members/@me
   * - DELETE /channels/{id}/members/@me
   */
  member(channelId: Snowflake, memberKey: MemberKey) {
    return `/channels/${channelId}/members/${memberKey}` as const;
  },

  /**
   * Route for:
   * - GET /channels/{id}/members
   */
  members(channelId: Snowflake) {
    return `/channels/${channelId}/members` as const;
  },

  /**
   * Route for:
   * - GET    /messages/channel/{channelId}/{id}
   * - PATCH  /messages/channel/{channelId}/{id}
   * - DELETE /messages/channel/{channelId}/{id}
   */
  message(channelId: Snowflake, messageId: Snowflake) {
    return `/messages/channel/${channelId}/${messageId}` as const;
  },

  /**
   * Route for:
   * - GET  /messages/channel/{channelId}
   * - POST /messages/channel/{channelId}
   */
  messages(channelId: Snowflake) {
    return `/messages/channel/${channelId}` as const;
  },

  /**
   * Route for:
   * - GET    /users/{userKey}
   * - PATCH  /users/@me
   * - DELETE /users/@me
   */
  user(userKey: UserKey = "@me") {
    return `/users/${userKey}` as const;
  },

  /**
   * Route for:
   * - POST /users/@me/delete/confirm
   */
  userConfirmDelete() {
    return `/users/@me/delete/confirm` as const;
  },

  /**
   * Route for:
   * - POST   /users/@me/mfa
   * - DELETE /users/@me/mfa
   */
  userMfa() {
    return "/users/@me/mfa" as const;
  },

  /**
   * Route for:
   * - POST /users/@me/mfa/setup/validate
   */
  userValidateMfa() {
    return "/users/@me/mfa/setup/validate" as const;
  },
};
