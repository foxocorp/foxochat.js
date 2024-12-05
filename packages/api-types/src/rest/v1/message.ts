import type { APIMessage, APIOk } from "../../v1";

// https://docs.foxogram.su/list-messages
export type RESTGetAPIMessageListResult = APIMessage[];

// https://docs.foxogram.su/get-message-by-id
export type RESTGetAPIMessageResult = APIMessage;

// https://docs.foxogram.su/create-message
export type RESTPostAPIMessageResult = APIMessage;

export interface RESTPostAPIMessageBody {
  content: string;
  attachments: string[];
}

// https://docs.foxogram.su/delete-message
export type RESTDeleteAPIMessageResult = APIOk;

// https://docs.foxogram.su/edit-message
export type RESTPatchAPIMessageResult = APIMessage;

export interface RESTPatchAPIMessageBody {
  content?: string;
  attachments?: string[];
}
