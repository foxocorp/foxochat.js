import type { Options } from '@/types'
import type { MarkOptional } from 'ts-essentials'

/**
 * Default options of REST client.
 */
export const DefaultOptions = {
  authPrefix: 'Bearer ',
  enforceAuth: false,
  request: (url, init) => fetch(url, init),
} as const satisfies MarkOptional<Options, 'baseURL'>
