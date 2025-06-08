import { APIRoutes, type RESTGetAPIInfoResult } from '@foxochat/api-types'
import type REST from '@foxochat/rest'

/**
 * A wrapper for the FoxoChat common API.
 */
export default class CommonAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches the API info.
   */
  public async info() {
    return await this.rest.get<RESTGetAPIInfoResult>(APIRoutes.info(), {
      useAuth: false,
    })
  }
}
