export interface RESTAPIAttachmentUploadResponse {
  /**
   * The id of the attachment.
   */
  id: number;

  /**
   * The upload url of the attachment.
   */
  url: string;
}

export interface RESTAPIAttachmentUploadRequest {
  /**
   * The file name of the attachment.
   */
  filename: string;

  /**
   * The content type of the attachment.
   */
  content_type: string;
}
