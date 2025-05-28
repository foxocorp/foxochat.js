import type { ClientOptions } from '#/types'

/**
 * Default options of client.
 */
export const ClientDefaultOptions = {
  api: {},
  gateway: {},
} as const satisfies ClientOptions
