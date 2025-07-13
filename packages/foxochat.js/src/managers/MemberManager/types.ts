import type { FetchOptions } from '@/types'
import type { Id } from '@foxochat/api-types'

export interface FetchMemberOptions extends FetchOptions {
  /**
   * The user id of the member to fetch.
   */
  id: Id
}

export interface FetchMembersOptions {}
