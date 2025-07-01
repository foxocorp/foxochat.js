import { Channel } from '@/models'
import type { APIChannel, PublicChannelKey } from '@foxochat/api-types'
import type Client from '@/Client'
import CachedManager from '@/managers/CachedManager'
import type { FetchChannelOptions } from '@/managers/ChannelManager/types'

/**
 * Manages API methods for channels and stores their cache.
 */
export default class ChannelManager extends CachedManager<number, APIChannel, Channel> {
  public constructor(client: Client) {
    super(client, Channel)
  }

  /**
   * Obtains a channel from API, or the channel cache if it's already available.
   */
  public fetch(key: PublicChannelKey): Promise<Channel>
  public fetch(options: FetchChannelOptions): Promise<Channel>
  public async fetch(options: FetchChannelOptions | PublicChannelKey): Promise<Channel> {
    if (typeof options !== 'object') options = { key: options, force: true }

    if (!options.force && typeof options.key == 'number') {
      const existing = this.cache.get(options.key)
      if (existing) return existing
    }

    const data = await this.client.api.channel.get(options.key)

    return this._add(data.id, data)
  }

  public override _remove(key: number): boolean {
    const channel = this.cache.get(key)
    if (!channel) {
      return false
    }

    for (const member of channel.members.cache.values()) {
      channel.members.cache.delete(member.id)
    }

    for (const message of channel.messages.cache.values()) {
      channel.messages.cache.delete(message.id)
    }

    return super._remove(key)
  }
}
