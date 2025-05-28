import type { ConstructorRESTOptions } from '@foxogram/rest'
import { MarkOptional } from 'ts-essentials'

/**
 * Options to be passed when creating the API client instance.
 */
export interface APIOptions {
  rest: ConstructorRESTOptions
}

export type APIConstructorOptions = MarkOptional<APIOptions, 'rest'>
