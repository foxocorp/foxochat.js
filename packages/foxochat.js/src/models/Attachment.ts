import { type APIAttachment, type AttachmentFlags, MediaRoutes } from '@foxochat/api-types'
import type Client from '@/Client'
import Data from '@/models/Data'

/**
 * API User model.
 */
export default class Attachment extends Data<APIAttachment> {
  /**
   * The object id of the attachment.
   */
  public uuid!: string

  /**
   * The file name of the attachment.
   */
  public filename!: string

  /**
   * The content type of the attachment.
   */
  public contentType!: string

  /**
   * The flags of the attachment.
   */
  public flags!: AttachmentFlags

  public constructor(client: Client, data: APIAttachment) {
    super(client, data.id, data)

    this._patch(data)
  }

  /**
   * The URL to this attachment.
   */
  public get url(): URL {
    return new URL(`${this.client.options.mediaBaseUrl}${MediaRoutes.attachment(this.uuid)}`)
  }

  public override _patch(data: Partial<APIAttachment>): void {
    if ('uuid' in data) this.uuid = data.uuid!
    if ('filename' in data) this.filename = data.filename!
    if ('content_type' in data) this.contentType = data.content_type!
    if ('flags' in data) this.flags = data.flags!
  }

  public override toJson(): APIAttachment {
    return {
      id: this.id,
      uuid: this.uuid,
      filename: this.filename,
      content_type: this.contentType,
      flags: this.flags,
    }
  }
}
