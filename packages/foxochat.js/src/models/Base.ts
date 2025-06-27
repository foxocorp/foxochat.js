import type Client from '@/Client'

export default abstract class Base<T> {
  protected constructor(
    public readonly client: Client,
    _data: T,
  ) {}

  public abstract toJson(): T

  public abstract patch(data: Partial<T>): void
}
