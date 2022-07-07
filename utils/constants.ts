export const ORIGIN =
  process.env.NEXT_PUBLIC_HOST ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  ('dprasad.me' as const)
export const PROTOCOL = process.env.NODE_ENV === 'production' ? 'https' : 'http'
export const HOST = `${PROTOCOL}://${ORIGIN}` as const

export const SEPARATOR = ' | '

export const SITE_TITLE = 'Durga Prasad'
export const SITE_TITLE_TEMPLATE = `${SITE_TITLE} ${SEPARATOR} %s`
export const SHORT_DESCRIPTION = "Prasad's personal website & portfolio"
export const DEFAULT_DESCRIPTION = `Hi, I'm Prasad; an ambitious full-stack developer, raised by the 2000's, and always looking for the next creative adventure.`

export const DEFAULT_IMAGE_URL = `/img/banner.png`
