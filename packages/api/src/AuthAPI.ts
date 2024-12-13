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

export class AuthAPI {
  public constructor(private readonly rest: REST) {}

  public async login(body: RESTPostAPIAuthLoginBody) {
    return this.rest.post<RESTPostAPIAuthLoginBody, RESTPostAPIAuthLoginResult>(
      APIRoutes.authLogin(),
      { body, useAuth: false },
    );
  }

  public async register(body: RESTPostAPIAuthRegisterBody) {
    return this.rest.post<
      RESTPostAPIAuthRegisterBody,
      RESTPostAPIAuthRegisterResult
    >(APIRoutes.authRegister(), { body, useAuth: false });
  }

  public async verifyEmail(code: string) {
    return this.rest.post<never, RESTPostAPIAuthVerifyEmailResult>(
      APIRoutes.authVerifyEmail(code),
    );
  }

  public async resendEmail() {
    return this.rest.post<never, RESTPostAPIAuthResendEmailResult>(
      APIRoutes.authResendEmail(),
    );
  }
}
