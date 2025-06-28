import type Client from '@/Client'
import type { Newable } from 'ts-essentials'
import type { Base } from '@/models'
import BaseManager from '@/managers/BaseManager'

/**
 * Manages the API methods of a data model with a mutable cache of instances.
 */
export default abstract class CachedManager<K, D, H extends Base<D, K>> extends BaseManager {
  /**
   * The cache of items for this manager.
   */
  public readonly cache = new Map<K, H>()

  protected constructor(
    client: Client,

    /**
     * The data structure belonging to this manager.
     */
    protected readonly holds: Newable<H>,
  ) {
    super(client)
  }

  /**
   * Adds an entry to the cache or updates an existing one.
   */
  public _add(key: K, data: D): H {
    const existing = this.cache.get(key)

    if (existing) {
      existing._patch(data)
      return existing
    }

    const entry = this.createHeld(data)
    this.cache.set(key, entry)

    return entry
  }

  /**
   * Removes an entry from the cache.
   */
  public _remove(key: K): boolean {
    return this.cache.delete(key)
  }

  protected createHeld(data: D): H {
    return new this.holds(this.client, data)
  }
}
