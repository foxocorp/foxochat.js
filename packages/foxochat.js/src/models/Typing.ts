import Base from '@/models/Base'
import type Client from '@/Client'
import type { GatewayDispatchTypingStartPayload } from '@foxochat/gateway-types'
import User from '@/models/User'
import Channel from '@/models/Channel'
import Member from '@/models/Member'

type GatewayDispatchClientboundTypingStartPayload = GatewayDispatchTypingStartPayload<true>

/**
 * Gateway clientbound typing model.
 */
export default class Typing extends Base<GatewayDispatchClientboundTypingStartPayload> {
  /**
   * The time the user started typing at.
   */
  public startedAt!: Date

  public constructor(
    client: Client,

    /**
     * The channel in which the user is typing.
     */
    public readonly channel: Channel,

    /**
     * The user who is typing.
     */
    public readonly user: User,

    data: GatewayDispatchClientboundTypingStartPayload,
  ) {
    super(client, data)

    this._patch(data)
  }

  /**
   * The member who is typing.
   */
  public get member(): Member | null {
    return this.channel.members.cache.get(this.user.id) ?? null
  }

  public override _patch(data: GatewayDispatchClientboundTypingStartPayload): void {
    if ('timestamp' in data) this.startedAt = new Date(data.timestamp)
  }

  public override toJson(): GatewayDispatchClientboundTypingStartPayload {
    return {
      channel_id: this.channel.id,
      timestamp: this.startedAt.getTime(),
      user_id: this.user.id,
    }
  }
}
