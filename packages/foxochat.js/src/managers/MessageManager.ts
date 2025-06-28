import { Channel, Message } from '@/models'
import type { APIMessage } from '@foxochat/api-types'
import CachedManager from '@/managers/CachedManager'

/**
 * Manages API methods for messages and stores their cache.
 */
export default class MessageManager extends CachedManager<number, APIMessage, Message> {
  public constructor(private readonly channel: Channel) {
    super(channel.client, Message)
  }

  /**
   * Obtains a message from API, or the message cache if it's already available.
   */
  public async fetch(id: number, force: boolean = false): Promise<Message> {
    if (!force) {
      const existing = this.cache.get(id)
      if (existing) return existing
    }

    const data = await this.client.api.message.get(this.channel.id, id)
    return this._add(data.id, data)
  }

  /**
   * Obtains a messages from API.
   */
  public async fetchMany(): Promise<Map<number, Message>> {
    const data = await this.client.api.message.list(this.channel.id)

    return data.reduce(
      (collection, message) => collection.set(message.id, this._add(message.id, message)),
      new Map<number, Message>(),
    )
  }

  protected override createHeld(data: APIMessage): Message {
    return new Message(this.client, data, this.channel)
  }
}
