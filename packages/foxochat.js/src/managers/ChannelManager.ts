import { CachedManager } from './CachedManager'
import { Channel } from '@/models'
import type { APIChannel } from '@foxochat/api-types'
import type Client from '@/Client'

/**
 * Manages API methods for channels and stores their cache.
 */
export class ChannelManager extends CachedManager<number, APIChannel, Channel> {
  public constructor(client: Client) {
    super(client, Channel)
  }

  /**
   * Obtains a channel from API, or the channel cache if it's already available.
   */
  public async fetch(id: number, force: boolean = false): Promise<Channel> {
    if (!force) {
      const existing = this.cache.get(id)
      if (existing) return existing
    }

    const data = await this.client.api.channel.get(id)
    return this.add(data.id, data)
  }
}
