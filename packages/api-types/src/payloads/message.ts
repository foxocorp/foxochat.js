import type { Snowflake } from "../common";

/**
 * API Message DTO.
 */
export interface APIMessage {
  /**
   * The id of the message.
   */
  id: Snowflake;

  /**
   * The content of the message.
   */
  content: string;

  /**
   * The id of the author of the message.
   */
  authorId: Snowflake;

  /**
   * The id of the channel the message was sent in.
   */
  channelId: Snowflake;

  /**
   * The files attached to the message.
   */
  attachments: string[];
}
