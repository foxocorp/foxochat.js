import type { Snowflake } from "../../common";

export interface APIUser {
  id: Snowflake;
  avatar: string;
  displayName: string;
  username: string;
  email: string | null;
  flags: UserFlags;
  type: UserType;
}

export enum UserType {
  User = 1,
  Bot = 2,
}

export enum UserFlags {
  EmailVerified = 1 << 0,
  MfaEnabled = 1 << 1,
  Disabled = 1 << 2,
}
