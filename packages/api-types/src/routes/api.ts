import type { Id } from '@/payloads'

/**
 * The key of current user.
 */
export const UserMe = '@me'

/**
 * The key of the public entity.
 */
export type PublicKey = `@${string}`

/**
 * The key of the public user.
 *
 * Can be id, \@name or \@me.
 */
export type PublicUserKey = typeof UserMe | Id | PublicKey

/**
 * The key of the member.
 *
 * Can be id or \@me.
 */
export type MemberKey = typeof UserMe | Id

/**
 * The key of the public channel.
 */
export type PublicChannelKey = Id | PublicKey

/**
 * The routes of API.
 */
export const APIRoutes = {
  /**
   * Route for:
   * - POST /auth/login
   */
  authLogin() {
    return '/auth/login' as const
  },

  /**
   * Route for:
   * - POST /auth/register
   */
  authRegister() {
    return '/auth/register' as const
  },

  /**
   * Route for:
   * - POST /auth/email/resend
   */
  authResendEmail() {
    return '/auth/email/resend' as const
  },

  /**
   * Route for:
   * - POST /auth/reset-password
   */
  authResetPassword() {
    return '/auth/reset-password' as const
  },

  /**
   * Route for:
   * - POST /auth/reset-password/confirm
   */
  authResetPasswordConfirm() {
    return '/auth/reset-password/confirm' as const
  },

  /**
   * Route for:
   * - POST /auth/email/verify
   */
  authVerifyEmail() {
    return '/auth/email/verify' as const
  },

  /**
   * Route for:
   - GET    /channels/{channelKey}
   - PATCH  /channels/{channelKey}
   - DELETE /channels/{channelKey}
   */
  channel(channelKey: PublicChannelKey) {
    return `/channels/${channelKey}` as const
  },

  /**
   * Route for:
   * - POST /channels/
   */
  channels() {
    return '/channels/' as const
  },

  /**
   * Route for:
   * - GET    /channels/{channelId}/members/{memberId}
   * - PUT    /channels/{channelId}/members/@me
   * - DELETE /channels/{channelId}/members/@me
   */
  channelMember(channelId: Id, memberKey: MemberKey = UserMe) {
    return `/channels/${channelId}/members/${memberKey}` as const
  },

  /**
   * Route for:
   * - GET /channels/{channelId}/members
   * - PUT /channels/{channelId}/members
   */
  channelMembers(channelId: Id) {
    return `/channels/${channelId}/members` as const
  },

  /**
   * Route for:
   * - PUT /channels/{channelId}/attachments
   */
  messageAttachments(channelId: Id) {
    return `/channels/${channelId}/attachments` as const
  },

  /**
   * Route for:
   * - PUT /channels/{channelId}/icon
   */
  channelIcon(channelId: Id) {
    return `/channels/${channelId}/icon` as const
  },

  /**
   * Route for:
   * - GET    /channels/{channelId}/messages/{messageId}
   * - PATCH  /channels/{channelId}/messages/{messageId}
   * - DELETE /channels/{channelId}/messages/{messageId}
   */
  message(channelId: Id, messageId: Id) {
    return `/channels/${channelId}/messages/${messageId}` as const
  },

  /**
   * Route for:
   * - GET  /channels/{channelId}/messages
   * - POST /channels/{channelId}/messages
   */
  messages(channelId: Id) {
    return `/channels/${channelId}/messages` as const
  },

  /**
   * Route for:
   * - GET    /users/{userKey}
   * - PATCH  /users/@me
   * - DELETE /users/@me
   * - POST   /users/{id}
   * - DELETE /users/{id}
   */
  user(userKey: PublicUserKey = UserMe) {
    return `/users/${userKey}` as const
  },

  /**
   * Route for:
   *  - PUT /users/@me/avatar
   */
  userAvatar() {
    return `/users/@me/avatar` as const
  },

  /**
   * Route for:
   *  - PUT /users/@me/banner
   */
  userBanner() {
    return `/users/@me/banner` as const
  },

  /**
   * Route for:
   * - GET /users/@me/channels
   */
  userChannels() {
    return '/users/@me/channels' as const
  },

  /**
   * Route for:
   * - GET /users/@me/contacts
   */
  userContacts() {
    return '/users/@me/contacts' as const
  },

  /**
   * Route for:
   * - POST /users/@me/delete-confirm
   */
  userConfirmDelete() {
    return '/users/@me/delete-confirm' as const
  },

  /**
   * Route for:
   * - GET /info
   */
  info() {
    return '/info' as const
  },
}
