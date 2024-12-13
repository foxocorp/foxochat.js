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

export class UserAPI {
  public constructor(private readonly rest: REST) {}

  public async get(key: UserKey) {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user(key));
  }

  public async current() {
    return await this.rest.get<RESTGetAPIUserResult>(APIRoutes.user("@me"));
  }

  public async edit(body: RESTPatchAPIUserBody) {
    return await this.rest.patch<RESTPatchAPIUserBody, RESTPatchAPIUserResult>(
      APIRoutes.user("@me"),
      { body },
    );
  }

  public async delete(body: RESTDeleteAPIUserBody) {
    return await this.rest.delete<
      RESTDeleteAPIUserBody,
      RESTDeleteAPIUserResult
    >(APIRoutes.user("@me"), { body });
  }

  public async confirmDelete() {
    return await this.rest.post<never, RESTPostAPIUserDeleteConfirmResult>(
      APIRoutes.userConfirmDelete(),
    );
  }
}
