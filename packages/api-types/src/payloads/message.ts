/**
 * API Message DTO.
 */
export interface APIMessage {
  /**
   * The id of the message.
   */
  id: number;

  /**
   * The content of the message.
   */
  content: string;

  /**
   * The name of the author of the message.
   */
  author: string;

  /**
   * The name of the channel the message was sent in.
   */
  channel: string;

  /**
   * The files attached to the message.
   */
  attachments: string[];

  /**
   * The time when message sent at.
   */
  created_at: number;
}
