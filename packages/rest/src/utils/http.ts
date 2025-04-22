import type { ResponseLike } from "../types";

export async function parseResponse(response: ResponseLike): Promise<unknown> {
  if (response.headers.get("Content-Type")?.startsWith("application/json")) {
    return response.json();
  }

  return response.arrayBuffer();
}
