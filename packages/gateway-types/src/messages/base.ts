import type { GatewayOpcodes } from '@/types'

/**
 * Gateway message.
 */
export interface GatewayMessage {
  op: number
  d?: unknown
  s?: number
  t?: string
}

/**
 * Gateway dispatch message.
 */
export interface GatewayDispatchMessage<E extends string, D = unknown> extends GatewayMessage {
  op: GatewayOpcodes.Dispatch
  t: E
  d: D
}

/**
 * Gateway dispatch message union.
 */
export type GatewayDispatchMessageUnion<M> = {
  [K in keyof M]: GatewayDispatchMessage<K & string, M[K]>
}[keyof M]

/**
 * Simple gateway message.
 */
export interface GatewaySimpleMessage<O extends number, D = null> extends Omit<GatewayMessage, 't' | 's'> {
  op: O
  d: D
}
