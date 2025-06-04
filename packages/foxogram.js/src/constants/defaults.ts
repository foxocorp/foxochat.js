import type { Options } from '@/types'

/**
 * Default options of client.
 */
export const DefaultOptions = {
  api: {},
  gateway: {},
} as const satisfies Options
