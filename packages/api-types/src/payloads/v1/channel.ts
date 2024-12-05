import type { Snowflake } from "../../common";

export interface APIChannel {
  id: Snowflake;
  name: string;
  type: ChannelType;
  ownerId: Snowflake;
}

export enum ChannelType {
  DM = 1,
  Group = 2,
  Channel = 3,
}
