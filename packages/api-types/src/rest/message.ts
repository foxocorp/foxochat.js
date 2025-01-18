import type { APIMessage, APIOk } from "../payloads";

/**
 * The result of GET /messages/channel/{name}.
 */
export type RESTGetAPIMessageListResult = APIMessage[];

/**
 * The query of GET /messages/channel/{name}.
 */
export interface RESTGetAPIMessageListQuery {
  /**
   * Get messages before this message ID.
   */
  before?: number;

  /**
   * Max number of messages to return.
   */
  limit?: number;
}

/**
 * The result of GET /messages/channel/{name}/{id}.
 */
export type RESTGetAPIMessageResult = APIMessage;

/**
 * The result of POST /messages/channel/{name}.
 */
export type RESTPostAPIMessageResult = APIMessage;

/**
 * The body of POST /messages/channel/{name}.
 */
export interface RESTPostAPIMessageBody {
  /**
   * The content of the message.
   */
  content: string;

  /**
   * The files attached to the message.
   */
  attachments?: Uint8Array[];
}

/**
 * The result of DELETE /messages/channel/{name}/{id}.
 */
export type RESTDeleteAPIMessageResult = APIOk;

/**
 * The result of PATCH /messages/channel/{name}/{id}.
 */
export type RESTPatchAPIMessageResult = APIMessage;

/**
 * The body of PATCH /messages/channel/{name}/{id}.
 */
export interface RESTPatchAPIMessageBody {
  /**
   * The content of the message.
   */
  content?: string;

  /**
   * The files attached to the message.
   */
  attachments?: Uint8Array[];
}
