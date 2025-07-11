import type { Id } from '@/payloads/common'

/**
 * API Attachment DTO.
 */
export interface APIAttachment {
  /**
   * The id of the attachment.
   */
  id: Id

  /**
   * The object id of the attachment.
   */
  uuid: string

  /**
   * The file name of the attachment.
   */
  filename: string

  /**
   * The content type of the attachment.
   */
  content_type: string

  /**
   * The flags of the attachment.
   */
  flags: AttachmentFlags
}

export interface APIAvatar {
  /**
   * The id of the avatar.
   */
  id: Id

  /**
   * The object id of the avatar.
   */
  uuid: string

  /**
   * The file name of the avatar.
   */
  filename: string

  /**
   * The ThumbHash of the avatar.
   */
  thumbhash: string
}

export interface APIMediaUpload {
  /**
   * The id of the attachment.
   */
  id: Id

  /**
   * The upload url of the attachment.
   */
  url: string
}

/**
 * Flags of the attachment.
 */
export enum AttachmentFlags {
  /**
   * Indicates that the attachment is a spoiler.
   */
  Spoiler = 1,
}
