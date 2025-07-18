import { Channel, Member } from '@/models'
import type { APIMember, Id } from '@foxochatjs/api-types'
import CachedManager from '@/managers/CachedManager'
import type { FetchMemberOptions, FetchMembersOptions } from '@/managers/MemberManager/types'

/**
 * Manages API methods for members and stores their cache.
 */
export default class MemberManager extends CachedManager<Id, APIMember, Member> {
  public constructor(private readonly channel: Channel) {
    super(channel.client, Member)
  }

  /**
   * Obtains a member from API, or the member cache if it's already available.
   */
  public fetch(id: Id): Promise<Member>
  public fetch(options: FetchMemberOptions): Promise<Member>
  public fetch(options?: FetchMembersOptions): Promise<Map<number, Member>>
  public async fetch(
    options: number | undefined | FetchMemberOptions | FetchMembersOptions,
  ): Promise<Map<number, Member> | Member> {
    if (typeof options == 'number') return await this.fetchSingle({ id: options })
    if (options && 'id' in options) return await this.fetchSingle(options)

    return this.fetchMany(options)
  }

  private async fetchSingle(options: FetchMemberOptions): Promise<Member> {
    if (!options.force) {
      const existing = this.cache.get(options.id)
      if (existing) return existing
    }

    const data = await this.client.api.channel.member(this.channel.id, options.id, {
      withUser: options.withUser,
      withChannel: options.withChannel,
    })
    return this._add(data.id, data)
  }

  private async fetchMany(options?: FetchMembersOptions): Promise<Map<number, Member>> {
    const data = await this.client.api.channel.members(this.channel.id, options)

    return data.reduce(
      (collection, message) => collection.set(message.id, this._add(message.id, message)),
      new Map<number, Member>(),
    )
  }
}
