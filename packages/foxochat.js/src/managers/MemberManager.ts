import { Channel, Member } from '@/models'
import type { APIMember } from '@foxochat/api-types'
import CachedManager from '@/managers/CachedManager'

/**
 * Manages API methods for members and stores their cache.
 */
export default class MemberManager extends CachedManager<number, APIMember, Member> {
  public constructor(private readonly channel: Channel) {
    super(channel.client, Member)
  }

  /**
   * Obtains a member from API, or the member cache if it's already available.
   */
  public async fetch(id: number, force: boolean = false): Promise<Member> {
    if (!force) {
      const existing = this.cache.get(id)
      if (existing) return existing
    }

    const data = await this.client.api.channel.member(this.channel.id, id)
    return this.add(data.id, data)
  }

  /**
   * Obtains a members from API.
   */
  public async fetchMany(): Promise<Map<number, Member>> {
    const data = await this.client.api.channel.members(this.channel.id)

    return data.reduce(
      (collection, message) => collection.set(message.id, this.add(message.id, message)),
      new Map<number, Member>(),
    )
  }
}
