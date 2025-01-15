import type { APIChannel, APIMember } from "./channel";

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
   * The author of the message.
   */
  author: APIMember;

  /**
   * The channel the message was sent in.
   */
  channel: APIChannel;

  /**
   * The files attached to the message.
   */
  attachments: string[];

  /**
   * The time when message sent at.
   */
  created_at: number;
}
