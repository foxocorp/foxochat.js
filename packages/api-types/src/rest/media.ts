import type { APIMediaUpload } from '@/payloads'

/**
 * The result of POST /channels/{channelId}/attachments.
 */
export type RESTAPIAttachmentUploadResponse = APIMediaUpload

/**
 * The body of POST /channels/{channelId}/attachments.
 */
export interface RESTAPIAttachmentUploadRequest {
  /**
   * The file name of the attachment.
   */
  filename: string

  /**
   * The content type of the attachment.
   */
  content_type: string

  /**
   * The ThumbHash of the attachment.
   */
  thumbhash: string

  /**
   * Is spoiler?
   */
  spoiler: boolean
}

/**
 * The result of POST /users/@me/avatar.
 */
export type RESTAPIAvatarUploadResponse = APIMediaUpload

/**
 * The body of POST /users/@me/avatar.
 */
export interface RESTAPIAvatarUploadRequest {
  /**
   * The file name of the avatar.
   */
  filename: string

  /**
   * The ThumbHash of the avatar.
   */
  thumbhash: string
}
