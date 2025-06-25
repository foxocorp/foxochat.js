import { BaseManager } from './BaseManager'
import type Client from '@/Client'
import { Collection } from '@discordjs/collection'
import type { Newable } from 'ts-essentials'
import type { Base } from '@/models'

/**
 * Manages the API methods of a data model with a mutable cache of instances.
 */
export abstract class CachedManager<K, D, H extends Base<D>> extends BaseManager {
  /**
   * The cache of items for this manager.
   */
  public readonly cache = new Collection<K, H>()

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
  public add(key: K, data: D): H {
    const existing = this.cache.get(key)

    if (!!existing) {
      existing.patch(data)
      return existing
    }

    const entry = new this.holds(this.client, data)
    this.cache.set(key, entry)

    return entry
  }
}
