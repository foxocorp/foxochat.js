/**
 * The key of current user.
 */
export const UserMe = "@me";

/**
 * The key of the public entity.
 */
export type PublicKey = `@${string}`

/**
 * The key of the public user.
 *
 * Can be id, \@name or \@me.
 */
export type PublicUserKey =  typeof UserMe | number | PublicKey;

/**
 * The key of the member.
 *
 * Can be id, \@name or \@me.
 */
export type MemberKey = typeof UserMe | number;

/**
 * The key of the public channel.
 */
export type PublicChannelKey = number | PublicKey;

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
   * - POST /auth/reset-password
   */
  authResetPassword() {
    return "/auth/reset-password" as const;
  },

  /**
   * Route for:
   * - POST /auth/reset-password/confirm
   */
  authResetPasswordConfirm() {
    return "/auth/reset-password/confirm" as const;
  },

  /**
   * Route for:
   * - POST /auth/email/verify
   */
  authVerifyEmail() {
    return "/auth/email/verify" as const;
  },

  /**
   * Route for:
   - GET    /channels/{channelKey}
   - PATCH  /channels/{channelKey}
   - DELETE /channels/{channelKey}
   */
  channel(channelKey: PublicChannelKey) {
    return `/channels/${channelKey}` as const;
  },

  /**
   * Route for:
   * - POST /channels/
   */
  channels() {
    return "/channels/" as const;
  },

  /**
   * Route for:
   * - GET    /channels/{channelId}/members/{memberId}
   * - PUT    /channels/{channelId}/members/@me
   * - DELETE /channels/{channelId}/members/@me
   */
  member(channelId: number, memberKey: MemberKey) {
    return `/channels/${channelId}/members/${memberKey}` as const;
  },

  /**
   * Route for:
   * - GET /channels/{channelId}/members
   */
  members(channelId: number) {
    return `/channels/${channelId}/members` as const;
  },

  /**
   * Route for:
   * - GET    /messages/channel/{channelId}/{messageId}
   * - PATCH  /messages/channel/{channelId}/{messageId}
   * - DELETE /messages/channel/{channelId}/{messageId}
   */
  message(channelId: number, messageId: number) {
    return `/messages/channel/${channelId}/${messageId}` as const;
  },

  /**
   * Route for:
   * - GET  /messages/channel/{channelId}
   * - POST /messages/channel/{channelId}
   */
  messages(channelId: number) {
    return `/messages/channel/${channelId}` as const;
  },

  /**
   * Route for:
   * - GET    /users/{userKey}
   * - PATCH  /users/@me
   * - DELETE /users/@me
   */
  user(userKey: PublicUserKey = UserMe) {
    return `/users/${userKey}` as const;
  },

  /**
   * Route for:
   * - GET /users/@me/channels
   */
  userChannels() {
    return "/users/@me/channels" as const;
  },

  /**
   * Route for:
   * - POST /users/@me/delete-confirm
   */
  userConfirmDelete() {
    return "/users/@me/delete-confirm" as const;
  },
};
