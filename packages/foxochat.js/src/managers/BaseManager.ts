import type Client from '@/Client'

/**
 * Manages the API methods of a data model.
 */
export default abstract class BaseManager {
  protected constructor(
    /**
     * The client that instantiated this Manager
     */
    public readonly client: Client,
  ) {}
}
