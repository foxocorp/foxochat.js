import { APIRoutes, type RESTGetAPIInfoResult } from "@foxogram/api-types";
import type REST from "@foxogram/rest";

/**
 * A wrapper for the Foxogram common API.
 */
export default class CommonAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches the API info.
   */
  public async info() {
    return await this.rest.get<RESTGetAPIInfoResult>(APIRoutes.info(), {
      useAuth: false,
    });
  }
}
