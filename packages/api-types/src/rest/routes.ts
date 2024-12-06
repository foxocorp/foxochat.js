import type { Snowflake } from "../common";

export type UserMe = "@me";
export type UserKey = Snowflake | UserMe | string;
export type MemberKey = Snowflake | UserMe;

export const Routes = {
  authRegister() {
    return "/auth/register" as const;
  },

  authLogin() {
    return "/auth/login" as const;
  },

  authVerifyEmail(code: string) {
    return `/auth/email/verify/${code}` as const;
  },

  authResendEmail() {
    return "/auth/email/resend" as const;
  },

  userConfirmDelete() {
    return `/users/@me/delete/confirm` as const;
  },

  user(userKey: UserKey = "@me") {
    return `/users/${userKey}` as const;
  },

  userMfa() {
    return "/users/@me/mfa" as const;
  },

  userValidateMfa() {
    return "/users/@me/mfa/setup/validate" as const;
  },

  channels() {
    return "/channels" as const;
  },

  channel(channelId: Snowflake) {
    return `/channels/${channelId}` as const;
  },

  members(channelId: Snowflake) {
    return `/channels/${channelId}/members` as const;
  },

  member(channelId: Snowflake, memberKey: MemberKey) {
    return `/channels/${channelId}/members/${memberKey}` as const;
  },

  messages(channelId: Snowflake) {
    return `/messages/channel/${channelId}` as const;
  },

  message(channelId: Snowflake, messageId: Snowflake) {
    return `/messages/channel/${channelId}/${messageId}` as const;
  },
};

export const RouteBases = {
  api: `https://api.foxogram.su`,
} as const;
