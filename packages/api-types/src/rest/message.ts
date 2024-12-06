import type { APIMessage, APIOk } from "../payloads";

// GET /messages/channel/{channelId}
export type RESTGetAPIMessageListResult = APIMessage[];

// GET /messages/channel/{channelId}/{id}
export type RESTGetAPIMessageResult = APIMessage;

// POST /messages/channel/{channelId}
export type RESTPostAPIMessageResult = APIMessage;

export interface RESTPostAPIMessageBody {
  content: string;
  attachments: string[];
}

// DELETE /messages/channel/{channelId}/{id}
export type RESTDeleteAPIMessageResult = APIOk;

// PATCH /messages/channel/{channelId}/{id}
export type RESTPatchAPIMessageResult = APIMessage;

export interface RESTPatchAPIMessageBody {
  content?: string;
  attachments?: string[];
}
