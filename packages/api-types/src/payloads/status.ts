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
   * The user not found.
   */
  UserNotFound = 100,

  /**
   * The user's email not verified.
   */
  UserEmailNotVerified = 101,

  /**
   * The user's credentials are duplicated by another user's credentials.
   */
  UserCredentialsDuplicate = 102,

  /**
   * The passed user's credentials is invalid.
   */
  UserCredentialsIsInvalid = 103,

  /**
   * The user is unautorized.
   */
  UserUnauthorized = 104,

  /**
   * The channel not found.
  */
  ChannelNotFound = 200,

  /**
   * The channel is already exist.
  */
  ChannelAlreadyExist = 201,

  /**
   * There is no such member in channel.
   */
  MemberInChannelNotFound = 300,

  /**
   * The member already joined the channel.
   */
  MemberAlreadyInChannel = 301,

  /**
   * Missing permissions.
   */
  MissingPermissions = 302,

  /**
   * The message not found.
   */
  MessageNotFound = 400,

  /**
   * Code is invalid.
   */
  CodeIsInvalid = 500,

  /**
   * Code is expired.
   */
  CodeExpired = 501,

  /**
   * Need to wait before email resend.
   */
  NeedToWaitBeforeResend = 502,

  /**
   * Upload file to remote storage failed.
   */
  UploadFailed = 600,

  /**
   * Invalid file format
   */
  InvalidFileFormat = 601,

  /**
   * Rate limit exceeded
   */
  RateLimitExceeded = 700,

  /**
   * Empty request body
   */
  EmptyBody = 701,

  /**
   * Validation error
   */
  ValidationError = 702,

  /**
   * API route not found
   */
  RouteNotFound = 703,
}
