import { AuthAPI } from "./AuthAPI";
import { ChannelAPI } from "./ChannelAPI";
import { MessageAPI } from "./MessageAPI";
import { REST } from "@foxogram/rest";
import { UserAPI } from "./UserAPI";

export class API {
  public readonly auth: AuthAPI;
  public readonly channel: ChannelAPI;
  public readonly message: MessageAPI;
  public readonly user: UserAPI;

  public constructor(public readonly rest: REST) {
    this.auth = new AuthAPI(rest);
    this.channel = new ChannelAPI(rest);
    this.message = new MessageAPI(rest);
    this.user = new UserAPI(rest);
  }
}
