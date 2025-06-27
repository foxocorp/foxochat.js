import { APIChannel, ChannelFlags, ChannelType } from '@foxochat/api-types'
import type Client from '@/Client'
import Base from '@/models/Base'
import Attachment from '@/models/Attachment'
import User from '@/models/User'
import Message from '@/models/Message'
import MemberManager from '@/managers/MemberManager'
import MessageManager from '@/managers/MessageManager'

/**
 * API Channel model.
 */
export default class Channel extends Base<APIChannel> {
  /**
   * The id of the channel.
   */
  public readonly id: number

  /**
   * The name of the channel.
   */
  public name!: string

  /**
   * The display name of the channel.
   */
  public displayName!: string

  /**
   * The icon of the channel.
   */
  public icon!: Attachment | null

  /**
   * The type of the channel.
   */
  public type!: ChannelType

  /**
   * The flags of the channel.
   */
  public flags!: ChannelFlags

  /**
   * Amount of members in channel.
   */
  public memberCount!: number

  /**
   * The owner of the channel.
   */
  public owner!: User

  /**
   * The time when channel created at.
   */
  public createdAt!: Date

  /**
   * The last sent message in channel.
   */
  public lastMessage!: Message | null

  /**
   * A manager of the members of this channel.
   */
  public members = new MemberManager(this)

  /**
   * A manager of the messages sent to this channel.
   */
  public messages = new MessageManager(this)

  public constructor(client: Client, data: APIChannel) {
    super(client, data)

    this.id = data.id
    this._patch(data)
  }

  public override _patch(data: Partial<APIChannel>): void {
    if ('name' in data) this.name = data.name
    if ('display_name' in data) this.displayName = data.display_name
    if ('type' in data) this.type = data.type
    if ('flags' in data) this.flags = data.flags
    if ('member_count' in data) this.memberCount = data.member_count
    if ('created_at' in data) this.createdAt = new Date(data.created_at)

    if ('icon' in data) this.icon = data.icon ? new Attachment(this.client, data.icon) : null
    if ('owner' in data) this.owner = this.client.users.add(data.owner.id, data.owner)
    if ('last_message' in data)
      this.lastMessage = data.last_message ? this.messages.add(data.last_message.id, data.last_message) : null
  }

  public override toJson(): APIChannel {
    return {
      id: this.id,
      name: this.name,
      display_name: this.displayName,
      icon: this.icon?.toJson() ?? null,
      type: this.type,
      flags: this.flags,
      member_count: this.memberCount,
      owner: this.owner.toJson(),
      created_at: this.createdAt.getTime(),
      last_message: this.lastMessage?.toJson() ?? null,
    }
  }
}
