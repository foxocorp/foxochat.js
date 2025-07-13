/**
 * The routes of media storage.
 */
export const MediaRoutes = {
  /**
   * Route for:
   * - GET /avatars/{uuid}
   */
  avatar(uuid: string) {
    return `/avatars/${uuid}` as const
  },

  /**
   * Route for:
   * - GET /attachments/{uuid}
   */
  attachment(uuid: string) {
    return `/attachments/${uuid}` as const
  },
}
