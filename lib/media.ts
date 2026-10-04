export function getMediaUrl(media: any, fallback = ''): string {
  if (!media) return fallback
  if (typeof media === 'string') return media
  if (typeof media === 'object' && typeof media.url === 'string') {
    return media.url
  }
  return fallback
}

export function getMediaAlt(media: any, fallback = ''): string {
  if (!media) return fallback
  if (typeof media === 'object' && typeof media.alt === 'string') {
    return media.alt
  }
  return fallback
}
