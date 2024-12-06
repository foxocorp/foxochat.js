export interface APIOk {
  ok: boolean;
}

export interface APIException {
  ok: boolean;
  code: ExceptionCodes;
  message: string;
}

export enum ExceptionCodes {
  MessageNotFound = 101,
  ChannelNotFound = 201,
  UserNotFound = 301,
  UserEmailNotVerified = 302,
  UserCredentialsDuplicate = 303,
  UserCredentialsIsInvalid = 304,
  UserUnauthorized = 305,
  MemberInChannelNotFound = 401,
  MemberAlreadyInChannel = 402,
  MissingPermissions = 403,
  CodeIsInvalid = 501,
  CodeExpired = 502,
  NeedToWaitBeforeResend = 503,
  TOTPKeyIsInvalid = 601,
  MFAIsInvalid = 602,
}
