/**
 * The type of identifiers.
 */
export type Id = number

/**
 * The type of timestamps.
 */
export type Timestamp = number

/**
 * API Info DTO.
 */
export interface APIInfo {
  /**
   * The version of API.
   */
  version: string

  /**
   * The URL of CDN.
   */
  cdn_url: string

  /**
   * The URL of Gateway.
   */
  gateway_url: string

  /**
   * The URL of Application.
   */
  app_url: string
}

/**
 * API Ok DTO.
 */
export interface APIOk {
  /**
   * The status of successful completion of the request.
   */
  ok: boolean
}

/**
 * API Exception DTO.
 */
export interface APIException {
  /**
   * The status of successful completion of the request.
   */
  ok: boolean

  /**
   * The code of exception.
   */
  code: ExceptionCodes

  /**
   * The message of exception.
   */
  message: string
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
  UserEmailNotVerified,

  /**
   * The user's credentials are duplicated by another user's credentials.
   */
  UserCredentialsDuplicate,

  /**
   * The passed user's credentials is invalid.
   */
  UserCredentialsIsInvalid,

  /**
   * The user is unauthorized.
   */
  UserUnauthorized,

  /**
   * The channel not found.
   */
  ChannelNotFound = 200,

  /**
   * The channel is already exist.
   */
  ChannelAlreadyExist,

  /**
   * There is no such member in channel.
   */
  MemberNotFound = 300,

  /**
   * The member already joined the channel.
   */
  MemberAlreadyExist,

  /**
   * Member missing permissions.
   */
  MemberMissingPermissions,

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
  CodeExpired,

  /**
   * Need to wait before verification code resend.
   */
  CodeWaitToResend,

  /**
   * Upload file to remote storage failed.
   */
  CDNUploadFailed = 700,

  /**
   * Invalid file format.
   */
  CDNInvalidFileFormat,

  /**
   * Rate limit exceeded.
   */
  APIRateLimitExceeded = 800,

  /**
   * Empty request body.
   */
  APIEmptyBody,

  /**
   * Validation error.
   */
  APIValidationError,

  /**
   * API route not found.
   */
  APIRouteNotFound,

  /**
   * Unknown error.
   */
  UnknownError = 900,
}
