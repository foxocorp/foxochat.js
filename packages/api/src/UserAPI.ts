import {
  APIRoutes,
  type Id,
  type PublicUserKey,
  type RESTDeleteAPIUserBody,
  type RESTDeleteAPIUserContactResult,
  type RESTDeleteAPIUserResult,
  type RESTGetAPIUserChannelsResult,
  type RESTGetAPIUserResult,
  type RESTPatchAPIUserBody,
  type RESTPatchAPIUserResult,
  type RESTPostAPIUserContactResult,
  type RESTPostAPIUserDeleteConfirmBody,
  type RESTPostAPIUserDeleteConfirmResult,
  type RESTPutAPIUserAvatarBody,
  type RESTPutAPIUserAvatarResult,
  UserMe,
} from '@foxochat/api-types'
import type REST from '@foxochat/rest'

/**
 * A wrapper for the FoxoChat user API.
 */
export default class UserAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches a user.
   */
  public async get(userKey: PublicUserKey) {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user(userKey))
  }

  /**
   * Returns the current user.
   */
  public async current() {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user(UserMe))
  }

  /**
   * Edits the current user.
   */
  public async edit(body: RESTPatchAPIUserBody) {
    return await this.rest.patch<RESTPatchAPIUserResult>(APIRoutes.user(UserMe), { body })
  }

  /**
   * Requests user deletion.
   */
  public async delete(body: RESTDeleteAPIUserBody) {
    return await this.rest.delete<RESTDeleteAPIUserResult>(APIRoutes.user(UserMe), { body })
  }

  /**
   * Confirms user deletion.
   */
  public async confirmDelete(body: RESTPostAPIUserDeleteConfirmBody) {
    return await this.rest.post<RESTPostAPIUserDeleteConfirmResult>(APIRoutes.userConfirmDelete(), { body })
  }

  /**
   * Gets user channels.
   */
  public async channels() {
    return await this.rest.get<RESTGetAPIUserChannelsResult>(APIRoutes.userChannels())
  }

  /**
   * Uploads the user avatar.
   */
  public async uploadAvatar(body: RESTPutAPIUserAvatarBody) {
    return await this.rest.put<RESTPutAPIUserAvatarResult>(APIRoutes.userAvatar(), { body })
  }

  /**
   * Adds the user as contact.
   */
  public async addContact(userId: Id) {
    return await this.rest.post<RESTPostAPIUserContactResult>(APIRoutes.user(userId))
  }

  /**
   * Removes the user from contacts.
   */
  public async deleteContact(userId: Id) {
    return await this.rest.delete<RESTDeleteAPIUserContactResult>(APIRoutes.user(userId))
  }
}
