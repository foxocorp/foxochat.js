import type { FetchOptions } from '@/types'
import type { PublicUserKey } from '@foxochatjs/api-types'

export interface FetchUserOptions extends FetchOptions {
  /**
   * The key of the user to fetch.
   */
  key: PublicUserKey

  withChannels?: boolean
  withContacts?: boolean
  withAvatar?: boolean
  withBanner?: boolean
}
