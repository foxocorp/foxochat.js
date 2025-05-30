import type { RESTOptions } from '@/types'
import type { MarkOptional } from 'ts-essentials'

/**
 * Default options of REST client.
 */
export const RESTDefaultOptions = {
  authPrefix: 'Bearer ',
  enforceAuth: false,
  request: (url, init) => fetch(url, init),
} as const satisfies MarkOptional<RESTOptions, 'baseURL'>
