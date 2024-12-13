import {
  APIRoutes,
  RESTDeleteAPIMessageResult,
  RESTGetAPIMessageListResult,
  RESTGetAPIMessageResult,
  RESTPatchAPIMessageBody,
  RESTPatchAPIMessageResult,
  RESTPostAPIMessageBody,
  type Snowflake,
} from "@foxogram/api-types";
import type { REST } from "@foxogram/rest";

export class MessageAPI {
  public constructor(private readonly rest: REST) {}

  public async list(channelId: Snowflake) {
    return await this.rest.get<RESTGetAPIMessageListResult>(
      APIRoutes.messages(channelId),
    );
  }

  public async create(channelId: Snowflake, body: RESTPostAPIMessageBody) {
    return await this.rest.post<
      RESTPostAPIMessageBody,
      RESTGetAPIMessageListResult
    >(APIRoutes.messages(channelId), { body });
  }

  public async get(channelId: Snowflake, messageId: Snowflake) {
    return await this.rest.get<RESTGetAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
    );
  }

  public async edit(channelId: Snowflake, messageId: Snowflake) {
    return await this.rest.patch<
      RESTPatchAPIMessageBody,
      RESTPatchAPIMessageResult
    >(APIRoutes.message(channelId, messageId));
  }

  public async delete(channelId: Snowflake, messageId: Snowflake) {
    return await this.rest.delete<never, RESTDeleteAPIMessageResult>(
      APIRoutes.message(channelId, messageId),
    );
  }
}
