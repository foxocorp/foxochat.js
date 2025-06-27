/**
 * The routes of media storage.
 */
export const MediaRoutes = {
  /**
   * Route for:
   * - GET /attachments/{uuid}
   */
  attachment(uuid: string) {
    return `/attachments/${uuid}` as const
  },
}
