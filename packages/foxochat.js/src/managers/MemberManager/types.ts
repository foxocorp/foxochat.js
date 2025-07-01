import type { FetchOptions } from '@/types'

export interface FetchMemberOptions extends FetchOptions {
  /**
   * The user id of the member to fetch.
   */
  id: number
}

export interface FetchMembersOptions {}
