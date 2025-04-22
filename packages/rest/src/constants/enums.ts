/**
 * Specifies HTTP request methods.
 */
export enum RequestMethod {
  Get = "GET",
  Put = "PUT",
  Post = "POST",
  Patch = "PATCH",
  Delete = "DELETE",
}

/**
 * Represents type of request body.
 */
export enum RequestBodyType {
  json,
  init,
  formData,
}
