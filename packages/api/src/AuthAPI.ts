import {
  APIRoutes,
  type RESTPostAPIAuthLoginBody,
  type RESTPostAPIAuthLoginResult,
  type RESTPostAPIAuthRegisterBody,
  type RESTPostAPIAuthRegisterResult,
  type RESTPostAPIAuthResendEmailResult,
  type RESTPostAPIAuthResetPasswordBody,
  type RESTPostAPIAuthResetPasswordConfirmBody,
  type RESTPostAPIAuthResetPasswordConfirmResult,
  type RESTPostAPIAuthResetPasswordResult,
  type RESTPostAPIAuthVerifyEmailBody,
  type RESTPostAPIAuthVerifyEmailResult,
} from "@foxogram/api-types";
import type REST from "@foxogram/rest";

/**
 * A wrapper for the Foxogram authentication API.
 */
export default class AuthAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Logs into the user's account.
   */
  public async login(body: RESTPostAPIAuthLoginBody) {
    return this.rest.post<RESTPostAPIAuthLoginResult>(APIRoutes.authLogin(), {
      body,
      useAuth: false,
    });
  }

  /**
   * Registers a new user.
   */
  public async register(body: RESTPostAPIAuthRegisterBody) {
    return this.rest.post<RESTPostAPIAuthRegisterResult>(APIRoutes.authRegister(), {
      body,
      useAuth: false,
    });
  }

  /**
   * Confirms the user's email.
   */
  public async verifyEmail(body: RESTPostAPIAuthVerifyEmailBody) {
    return this.rest.post<RESTPostAPIAuthVerifyEmailResult>(APIRoutes.authVerifyEmail(), { body });
  }

  /**
   * Resends the confirmation email.
   */
  public async resendEmail() {
    return this.rest.post<RESTPostAPIAuthResendEmailResult>(APIRoutes.authResendEmail());
  }

  /**
   * Resets user's password.
   */
  public async resetPassword(body: RESTPostAPIAuthResetPasswordBody) {
    return this.rest.post<RESTPostAPIAuthResetPasswordResult>(APIRoutes.authResetPassword(), { body });
  }

  /**
   * Confirms resetting user password.
   */
  public async resetPasswordConfirm(body: RESTPostAPIAuthResetPasswordConfirmBody) {
    return this.rest.post<RESTPostAPIAuthResetPasswordConfirmResult>(APIRoutes.authResetPasswordConfirm(), { body });
  }
}
