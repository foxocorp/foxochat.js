import { User } from '@/models'
import type { APIUser } from '@foxochat/api-types'
import type Client from '@/Client'
import CachedManager from '@/managers/CachedManager'

/**
 * Manages API methods for users and stores their cache.
 */
export default class UserManager extends CachedManager<number, APIUser, User> {
  public constructor(client: Client) {
    super(client, User)
  }

  /**
   * Obtains a user from API, or the user cache if it's already available.
   */
  public async fetch(id: number, force: boolean = false): Promise<User> {
    if (!force) {
      const existing = this.cache.get(id)
      if (existing) return existing
    }

    const data = await this.client.api.user.get(id)
    return this._add(data.id, data)
  }
}
