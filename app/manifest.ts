import type { MetadataRoute } from 'next'
import { NAME, TAGLINE } from '@/data/profile'

// Emitted to out/manifest.webmanifest at build time. Referenced from the
// `manifest` field in app/layout.tsx metadata.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${NAME} — Software & Web Developer in Dubai, UAE`,
    short_name: NAME,
    description: TAGLINE,
    start_url: '/',
    display: 'standalone',
    background_color: '#060608',
    theme_color: '#060608',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
