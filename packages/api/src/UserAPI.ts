import {
  APIRoutes,
  type RESTDeleteAPIUserBody,
  type RESTDeleteAPIUserResult,
  type RESTGetAPIUserChannelsResult,
  type RESTGetAPIUserResult,
  type RESTPatchAPIUserBody,
  type RESTPatchAPIUserResult,
  type RESTPostAPIUserDeleteConfirmBody,
  type RESTPostAPIUserDeleteConfirmResult,
  type UserKey,
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
  public async get(key: UserKey) {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user(key));
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
    return await this.rest.patch<RESTPatchAPIUserBody, RESTPatchAPIUserResult>(
      APIRoutes.user(UserMe),
      { body },
    );
  }

  /**
   * Requests user deletion.
   */
  public async delete(body: RESTDeleteAPIUserBody) {
    return await this.rest.delete<
      RESTDeleteAPIUserBody,
      RESTDeleteAPIUserResult
    >(APIRoutes.user(UserMe), { body });
  }

  /**
   * Confirms user deletion.
   */
  public async confirmDelete(body: RESTPostAPIUserDeleteConfirmBody) {
    return await this.rest.post<
      RESTPostAPIUserDeleteConfirmBody,
      RESTPostAPIUserDeleteConfirmResult
    >(APIRoutes.userConfirmDelete(), { body });
  }

  /**
   * Gets user channels.
   */
  public async channels() {
    return await this.rest.get<RESTGetAPIUserChannelsResult>(
      APIRoutes.userChannels(),
    );
  }
}
