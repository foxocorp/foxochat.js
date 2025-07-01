import type { FetchOptions } from '@/types'

export interface FetchMessagesOptions {
  /**
   * Get messages before this timestamp.
   */
  before?: Date | number

  /**
   * Max number of messages to return.
   */
  limit?: number
}

export interface FetchMessageOptions extends FetchOptions {
  /**
   * The id of the message to fetch.
   */
  id: number
}
