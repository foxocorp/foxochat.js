import {
  APIRoutes,
  type RESTPostAPIAuthLoginBody,
  type RESTPostAPIAuthLoginResult,
  type RESTPostAPIAuthRegisterBody,
  type RESTPostAPIAuthRegisterResult,
  type RESTPostAPIAuthResendEmailResult,
  type RESTPostAPIAuthVerifyEmailResult,
} from "@foxogram/api-types";
import type { REST } from "@foxogram/rest";

/**
 * A wrapper for the Foxogram authentication API.
 */
export class AuthAPI {
  public constructor(private readonly rest: REST) {}

  /**
   * Logs into the user's account.
   */
  public async login(body: RESTPostAPIAuthLoginBody) {
    return this.rest.post<RESTPostAPIAuthLoginBody, RESTPostAPIAuthLoginResult>(
      APIRoutes.authLogin(),
      { body, useAuth: false },
    );
  }

  /**
   * Registers a new user.
   */
  public async register(body: RESTPostAPIAuthRegisterBody) {
    return this.rest.post<
      RESTPostAPIAuthRegisterBody,
      RESTPostAPIAuthRegisterResult
    >(APIRoutes.authRegister(), { body, useAuth: false });
  }

  /**
   * Confirms the user's email.
   */
  public async verifyEmail(code: string) {
    return this.rest.post<never, RESTPostAPIAuthVerifyEmailResult>(
      APIRoutes.authVerifyEmail(code),
    );
  }

  /**
   * Resends the confirmation email.
   */
  public async resendEmail() {
    return this.rest.post<never, RESTPostAPIAuthResendEmailResult>(
      APIRoutes.authResendEmail(),
    );
  }
}
