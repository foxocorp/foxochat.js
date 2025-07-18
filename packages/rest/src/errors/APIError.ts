import type { APIException } from '@foxochatjs/api-types'
import HTTPError from '@/errors/HTTPError'

/**
 * Represents an API error returned by FoxoChat.
 */
export default class APIError extends HTTPError {
  public constructor(
    status: number,
    method: string,
    route: string,
    public exception: APIException,
  ) {
    super(status, method, route)
  }
}
