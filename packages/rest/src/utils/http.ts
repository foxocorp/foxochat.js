import type { ResponseLike } from "#/types";

export async function parseResponse(response: ResponseLike): Promise<unknown> {
  return response.headers.get("Content-Type")?.startsWith("application/json")
    ? response.json()
    : response.arrayBuffer();
}
