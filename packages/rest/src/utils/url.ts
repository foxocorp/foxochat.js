export function serializeURLSearchParam(value: unknown): string | null {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
      return value.toString()
    default:
      return null
  }
}

export function buildURLSearchParams<T extends object>(options?: Readonly<T>): URLSearchParams {
  const params = new URLSearchParams()

  if (!options) return params

  for (const [key, value] of Object.entries(options)) {
    const serialized = serializeURLSearchParam(value)
    if (serialized != null) {
      params.append(key, serialized)
    }
  }

  return params
}
