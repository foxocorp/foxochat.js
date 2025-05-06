import {
  APIRoutes,
  type PublicUserKey,
  type RESTDeleteAPIUserBody,
  type RESTDeleteAPIUserResult,
  type RESTGetAPIUserChannelsResult,
  type RESTGetAPIUserResult,
  type RESTPatchAPIUserBody,
  type RESTPatchAPIUserResult,
  type RESTPostAPIUserDeleteConfirmBody,
  type RESTPostAPIUserDeleteConfirmResult,
  type RESTPutAPIUserAvatarBody,
  type RESTPutAPIUserAvatarResult,
  UserMe,
} from "@foxogram/api-types";
import type { REST } from "@foxogram/rest";

/**
 * A wrapper for the Foxogram user API.
 */
export class UserAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches a user.
   */
  public async get(userKey: PublicUserKey) {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user(userKey));
  }

  /**
   * Returns the current user.
   */
  public async current() {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user(UserMe));
  }

  /**
   * Edits the current user.
   */
  public async edit(body: RESTPatchAPIUserBody) {
    return await this.rest.patch<RESTPatchAPIUserResult>(APIRoutes.user(UserMe), { body });
  }

  /**
   * Requests user deletion.
   */
  public async delete(body: RESTDeleteAPIUserBody) {
    return await this.rest.delete<RESTDeleteAPIUserResult>(APIRoutes.user(UserMe), { body });
  }

  /**
   * Confirms user deletion.
   */
  public async confirmDelete(body: RESTPostAPIUserDeleteConfirmBody) {
    return await this.rest.post<RESTPostAPIUserDeleteConfirmResult>(APIRoutes.userConfirmDelete(), { body });
  }

  /**
   * Gets user channels.
   */
  public async channels() {
    return await this.rest.get<RESTGetAPIUserChannelsResult>(APIRoutes.userChannels());
  }

  /**
   * Uploads the user avatar.
   */
  public async uploadAvatar(body: RESTPutAPIUserAvatarBody) {
    return await this.rest.put<RESTPutAPIUserAvatarResult>(APIRoutes.userAvatar(), { body });
  }
}
