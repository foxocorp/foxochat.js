/**
 * API Attachment DTO.
 */
export interface APIAttachment {
  /**
   * The id of the attachment.
   */
  id: number

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
  flags: number
}
