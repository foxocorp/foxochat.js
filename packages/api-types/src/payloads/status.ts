/**
 * API Ok DTO.
 */
export interface APIOk {
  /**
   * The status of successful completion of the request.
   */
  ok: boolean;
}

/**
 * API Exception DTO.
 */
export interface APIException {
  /**
   * The status of successful completion of the request.
   */
  ok: boolean;

  /**
   * The code of exception.
   */
  code: ExceptionCodes;

  /**
   * The message of exception.
   */
  message: string;
}

/**
 * Codes of API exceptions.
 */
export enum ExceptionCodes {
  /**
   * The message not found.
   */
  MessageNotFound = 101,

  /**
   * The channel not found.
   */
  ChannelNotFound = 201,

  /**
   * The user not found.
   */
  UserNotFound = 301,

  /**
   * The user's email not verified.
   */
  UserEmailNotVerified = 302,

  /**
   * The user's credentials are duplicated by another user's credentials.
   */
  UserCredentialsDuplicate = 303,

  /**
   * The passed user's credentials is invalid.
   */
  UserCredentialsIsInvalid = 304,

  /**
   * The user is unautorized.
   */
  UserUnauthorized = 305,

  /**
   * There is no such member in channel.
   */
  MemberInChannelNotFound = 401,

  /**
   * The member already joined the channel.
   */
  MemberAlreadyInChannel = 402,

  /**
   * Missing permissions.
   */
  MissingPermissions = 403,

  /**
   * Code is invalid.
   */
  CodeIsInvalid = 501,

  /**
   * Code is expired.
   */
  CodeExpired = 502,

  /**
   * Need to wait before email resend.
   */
  NeedToWaitBeforeResend = 503,

  /**
   * TOTP key is invalid.
   */
  TOTPKeyIsInvalid = 601,

  /**
   * MFA is invalid.
   */
  MFAIsInvalid = 602,
}
