import type { APIMessage } from '@foxochatjs/api-types'
import type Client from '@/Client'
import Attachment from '@/models/Attachment'
import Channel from '@/models/Channel'
import Member from '@/models/Member'
import Data from '@/models/Data'

/**
 * API Message model.
 */
export default class Message extends Data<APIMessage> {
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
  public attachments!: Map<number, Attachment>

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
    super(client, data.id, data)

    this._patch(data)
  }

  public override _patch(data: Partial<APIMessage>): void {
    if (data.channel) this.channel._patch(data.channel)

    if ('content' in data) this.content = data.content!
    if ('author' in data) this.author = this.channel.members._add(data.author!.id, data.author!)
    if ('created_at' in data) this.createdAt = new Date(data.created_at!)

    if ('attachments' in data)
      this.attachments = data.attachments!.reduce(
        (collection, attachment) => collection.set(attachment.id, new Attachment(this.client, attachment)),
        new Map<number, Attachment>(),
      )
  }

  /**
   * Fetch this message.
   */
  public async fetch(force: boolean = true): Promise<Message> {
    return await this.channel.messages.fetch({ id: this.id, force })
  }

  /**
   * Deletes the message.
   */
  public async delete(): Promise<Message> {
    await this.channel.messages.delete(this.id)
    return this
  }

  public override toJson(): APIMessage {
    return {
      id: this.id,
      content: this.content,
      author: this.author.toJson(),
      channel: this.channel?.toJson() ?? null,
      attachments: Array.from(this.attachments.values()).map((attachment) => attachment.toJson()),
      created_at: this.createdAt.getTime(),
    }
  }
}
