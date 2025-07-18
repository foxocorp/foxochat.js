import type { APIMember, MemberPermissions } from '@foxochatjs/api-types'
import type Client from '@/Client'
import User from '@/models/User'
import Channel from '@/models/Channel'
import Data from '@/models/Data'

/**
 * API Member model.
 */
export default class Member extends Data<APIMember> {
  /**
   * The user of the member.
   */
  public user!: User

  /**
   * The channel of the member.
   */
  public channel!: Channel

  /**
   * The permissions of the member.
   */
  public permissions!: MemberPermissions

  /**
   * The time when member joined.
   */
  public joinedAt!: Date

  public constructor(client: Client, data: APIMember) {
    super(client, data.id, data)

    this._patch(data)
  }

  public override _patch(data: Partial<APIMember>): void {
    if ('permissions' in data) this.permissions = data.permissions!
    if ('joined_at' in data) this.joinedAt = new Date(data.joined_at!)

    if ('user' in data) this.user = this.client.users._add(data.user!.id, data.user!)
    if ('channel' in data) this.channel = this.client.channels._add(data.channel!.id, data.channel!)
  }

  /**
   * Fetch this member.
   */
  public async fetch(force: boolean = true): Promise<Member> {
    return await this.channel.members.fetch({ id: this.id, force })
  }

  public override toJson(): APIMember {
    return {
      id: this.id,
      user: this.user.toJson(),
      channel: this.channel.toJson(),
      permissions: this.permissions,
      joined_at: this.joinedAt.getTime(),
    }
  }
}
