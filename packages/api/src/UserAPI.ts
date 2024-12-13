import {
  APIRoutes,
  type RESTDeleteAPIUserBody,
  type RESTDeleteAPIUserResult,
  type RESTGetAPIUserResult,
  type RESTPatchAPIUserBody,
  type RESTPatchAPIUserResult,
  type RESTPostAPIUserDeleteConfirmResult,
  type UserKey,
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
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user("@me"));
  }

  /**
   * Edits the current user.
   */
  public async edit(body: RESTPatchAPIUserBody) {
    return await this.rest.patch<RESTPatchAPIUserBody, RESTPatchAPIUserResult>(
      APIRoutes.user("@me"),
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
    >(APIRoutes.user("@me"), { body });
  }

  /**
   * Confirms user deletion.
   */
  public async confirmDelete() {
    return await this.rest.post<never, RESTPostAPIUserDeleteConfirmResult>(
      APIRoutes.userConfirmDelete(),
    );
  }
}
