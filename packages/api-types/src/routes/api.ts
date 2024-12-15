/**
 * The key of current user.
 */
export const UserMe = "@me";

/**
 * The key of the user.
 *
 * Can be username or \@me.
 */
export type UserKey = typeof UserMe | string;

/**
 * The key of the member.
 *
 * Can be username or \@me.
 */
export type MemberKey = typeof UserMe | string;

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
    return `/auth/reset-password` as const;
  },

  /**
   * Route for:
   * - POST /auth/reset-password/confirm
   */
  authResetPasswordConfirm() {
    return `/auth/reset-password/confirm` as const;
  },

  /**
   * Route for:
   * - POST /auth/email/verify
   */
  authVerifyEmail() {
    return `/auth/email/verify` as const;
  },

  /**
   * Route for:
   - GET    /channels/{name}
   - PATCH  /channels/{name}
   - DELETE /channels/{name}
   */
  channel(name: string) {
    return `/channels/${name}` as const;
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
   * - GET    /channels/{name}/members/{memberUsername}
   * - PUT    /channels/{name}/members/@me
   * - DELETE /channels/{name}/members/@me
   */
  member(name: string, memberKey: MemberKey) {
    return `/channels/${name}/members/${memberKey}` as const;
  },

  /**
   * Route for:
   * - GET /channels/{name}/members
   */
  members(name: string) {
    return `/channels/${name}/members` as const;
  },

  /**
   * Route for:
   * - GET    /messages/channel/{name}/{id}
   * - PATCH  /messages/channel/{name}/{id}
   * - DELETE /messages/channel/{name}/{id}
   */
  message(name: string, messageId: number) {
    return `/messages/channel/${name}/${messageId}` as const;
  },

  /**
   * Route for:
   * - GET  /messages/channel/{name}
   * - POST /messages/channel/{name}
   */
  messages(name: string) {
    return `/messages/channel/${name}` as const;
  },

  /**
   * Route for:
   * - GET    /users/{username}
   * - PATCH  /users/@me
   * - DELETE /users/@me
   */
  user(userKey: UserKey = UserMe) {
    return `/users/${userKey}` as const;
  },

  /**
   * Route for:
   * - POST /users/@me/confirm
   */
  userConfirmDelete() {
    return `/users/@me/confirm` as const;
  },
};
