import type { Snowflake } from "../common";

export interface APIMessage {
  id: Snowflake;
  content: string;
  authorId: Snowflake;
  channelId: Snowflake;
  attachments: string[];
}
