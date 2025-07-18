import { type APIAvatar, MediaRoutes } from '@foxochatjs/api-types'
import type Client from '@/Client'
import Data from '@/models/Data'

/**
 * API Avatar model.
 */
export default class Avatar extends Data<APIAvatar> {
  /**
   * The object id of the avatar.
   */
  public uuid!: string

  /**
   * The file name of the avatar.
   */
  public filename!: string

  /**
   * The ThumbHash of the avatar.
   */
  public thumbhash!: string

  public constructor(client: Client, data: APIAvatar) {
    super(client, data.id, data)

    this._patch(data)
  }

  /**
   * The URL to this avatar.
   */
  public get url(): URL {
    return new URL(`${this.client.options.mediaBaseUrl}${MediaRoutes.avatar(this.uuid)}`)
  }

  public override _patch(data: Partial<APIAvatar>): void {
    if ('uuid' in data) this.uuid = data.uuid!
    if ('filename' in data) this.filename = data.filename!
    if ('thumbhash' in data) this.thumbhash = data.thumbhash!
  }

  public override toJson(): APIAvatar {
    return {
      id: this.id,
      uuid: this.uuid,
      filename: this.filename,
      thumbhash: this.thumbhash,
    }
  }
}
