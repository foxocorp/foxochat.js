import { ClientUser, User } from '@/models'
import { type APIUser, type PublicUserKey, UserMe, type Id } from '@foxochatjs/api-types'
import type Client from '@/Client'
import CachedManager from '@/managers/CachedManager'
import type { FetchUserOptions } from '@/managers/UserManager/types'

/**
 * Manages API methods for users and stores their cache.
 */
export default class UserManager extends CachedManager<Id, APIUser, User> {
  public constructor(client: Client) {
    super(client, User)
  }

  /**
   * Obtains a user from API, or the user cache if it's already available.
   */
  public fetch(key: typeof UserMe): Promise<ClientUser>
  public fetch(key: PublicUserKey): Promise<User>
  public fetch(options: FetchUserOptions): Promise<User>
  public async fetch(options: FetchUserOptions | PublicUserKey): Promise<User | ClientUser> {
    if (options == UserMe) return this.fetchCurrent(true)
    if (typeof options !== 'object') options = { key: options, force: true }

    if (!options.force && typeof options.key == 'number') {
      const existing = this.cache.get(options.key)
      if (existing) return existing
    }

    const data = await this.client.api.user.get(options.key, {
      withAvatar: options.withAvatar,
      withBanner: options.withBanner,
    })

    return this._add(data.id, data)
  }

  private async fetchCurrent(force: boolean = false): Promise<ClientUser> {
    if (!force) {
      const existing = this.client.user
      if (existing) return existing
    }

    const data = await this.client.api.user.get(UserMe, {
      withAvatar: true,
      withBanner: true,
      withChannels: true,
      withContacts: true,
    })
    this.client.user = new ClientUser(this.client, data)

    this.cache.set(this.client.user.id, this.client.user)

    return this.client.user
  }
}
