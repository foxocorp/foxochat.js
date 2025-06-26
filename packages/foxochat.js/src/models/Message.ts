import { Base } from './Base'
import type { APIMessage } from '@foxochat/api-types'
import type Client from '@/Client'
import { Attachment } from '@/models/Attachment'
import { Collection } from '@discordjs/collection'
import { Channel } from '@/models/Channel'
import { Member } from '@/models/Member'

/**
 * API Message model.
 */
export class Message extends Base<APIMessage> {
  /**
   * The id of the message.
   */
  public readonly id!: number

  /**
   * The content of the message.
   */
  public content!: string

  /**
   * The author of the message.
   */
  public author!: Member

  /**
   * The files attached to the message.
   */
  public attachments!: Collection<number, Attachment>

  /**
   * The time when message sent at.
   */
  public createdAt!: Date

  public constructor(
    client: Client,
    data: APIMessage,
    /**
     * The channel the message was sent in.
     */
    public readonly channel: Channel,
  ) {
    super(client, data)

    this.id = data.id
    this.patch(data)
  }

  public override patch(data: Partial<APIMessage>): void {
    if (data.channel) this.channel.patch(data.channel)

    if ('content' in data) this.content = data.content
    if ('author' in data) this.author = this.channel.members.add(data.author.id, data.author)
    if ('created_at' in data) this.createdAt = new Date(data.created_at)

    if ('attachments' in data)
      this.attachments = data.attachments.reduce(
        (collection, attachment) => collection.set(attachment.id, new Attachment(this.client, attachment)),
        new Collection<number, Attachment>(),
      )
  }

  public override toJson(): APIMessage {
    return {
      id: this.id,
      content: this.content,
      author: this.author.toJson(),
      channel: this.channel?.toJson() ?? null,
      attachments: this.attachments.map((attachment) => attachment.toJson()),
      created_at: this.createdAt.getTime(),
    }
  }
}
