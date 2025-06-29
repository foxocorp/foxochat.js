import { Channel } from '@/models'
import type { APIChannel } from '@foxochat/api-types'
import type Client from '@/Client'
import CachedManager from '@/managers/CachedManager'

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
  public async fetch(id: number, force: boolean = false): Promise<Channel> {
    if (!force) {
      const existing = this.cache.get(id)
      if (existing) return existing
    }

    const data = await this.client.api.channel.get(id)
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
