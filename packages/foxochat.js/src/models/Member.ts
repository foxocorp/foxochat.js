import { APIMember, MemberPermissions } from '@foxochat/api-types'
import type Client from '@/Client'
import User from '@/models/User'
import Channel from '@/models/Channel'
import Base from '@/models/Base'

/**
 * API Member model.
 */
export default class Member extends Base<APIMember> {
  /**
   * The id of the member.
   */
  public readonly id: number

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
    super(client, data)

    this.id = data.id
    this.patch(data)
  }

  public override patch(data: Partial<APIMember>): void {
    if ('permissions' in data) this.permissions = data.permissions
    if ('joined_at' in data) this.joinedAt = new Date(data.joined_at)

    if ('user' in data) this.user = this.client.users.add(data.user.id, data.user)
    if ('channel' in data) this.channel = this.client.channels.add(data.channel.id, data.channel)
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
