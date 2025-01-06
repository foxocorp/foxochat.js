import {
  APIRoutes,
  type RESTDeleteAPIMessageResult,
  type RESTGetAPIMessageListResult,
  type RESTGetAPIMessageResult,
  type RESTPatchAPIMessageBody,
  type RESTPatchAPIMessageResult,
  type RESTPostAPIMessageBody,
  type RESTPostAPIMessageResult,
} from "@foxogram/api-types";
import type { REST } from "@foxogram/rest";

/**
 * A wrapper for the Foxogram message API.
 */
export class MessageAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Fetches the messages in a channel.
   */
  public async list(channelName: string) {
    return await this.rest.get<RESTGetAPIMessageListResult>(
      APIRoutes.messages(channelName),
    );
  }

  /**
   * Sends a message in a channel.
   */
  public async create(channelName: string, body: RESTPostAPIMessageBody) {
    return await this.rest.post<
      RESTPostAPIMessageBody,
      RESTPostAPIMessageResult
    >(APIRoutes.messages(channelName), { body });
  }

  /**
   * Fetches a message.
   */
  public async get(channelName: string, messageId: number) {
    return await this.rest.get<RESTGetAPIMessageResult>(
      APIRoutes.message(channelName, messageId),
    );
  }

  /**
   * Edits a message.
   */
  public async edit(
    channelName: string,
    messageId: number,
    body: RESTPatchAPIMessageBody,
  ) {
    return await this.rest.patch<
      RESTPatchAPIMessageBody,
      RESTPatchAPIMessageResult
    >(APIRoutes.message(channelName, messageId), { body });
  }

  /**
   * Deletes a message.
   */
  public async delete(channelName: string, messageId: number) {
    return await this.rest.delete<never, RESTDeleteAPIMessageResult>(
      APIRoutes.message(channelName, messageId),
    );
  }
}
