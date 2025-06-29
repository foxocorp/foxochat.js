import type Client from '@/Client'

export default abstract class Base<T> {
  protected constructor(
    /**
     * The client that instantiated this Model.
     */
    public readonly client: Client,

    _data: T,
  ) {}

  public abstract toJson(): T

  public abstract _patch(data: Partial<T>): void

  public _clone(): typeof this {
    return Object.assign(Object.create(this), this)
  }

  public _update(data: Partial<T>): typeof this {
    const clone = this._clone()
    this._patch(data)
    return clone
  }
}
