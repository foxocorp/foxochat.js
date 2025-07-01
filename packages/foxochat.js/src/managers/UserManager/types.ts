import type { FetchOptions } from '@/types'
import type { PublicUserKey } from '@foxochat/api-types'

export interface FetchUserOptions extends FetchOptions {
  /**
   * The key of the user to fetch.
   */
  key: PublicUserKey
}
