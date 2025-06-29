import Base from '@/models/Base'
import type Client from '@/Client'

export default abstract class Data<T, K = number> extends Base<T> {
  protected constructor(
    client: Client,

    /**
     * The id of the model.
     */
    public readonly id: K,

    _data: T,
  ) {
    super(client, _data)
  }
}
