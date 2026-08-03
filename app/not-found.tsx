import type { Metadata } from 'next'
import Link from 'next/link'
import { SECTIONS } from '@/data/sections'

// Without this the 404 inherits the layout's `index, follow` and its canonical
// pointing at the site root, which invites Google to index the error page as a
// duplicate of the homepage.
export const metadata: Metadata = {
  title: { absolute: '404 — Page not found | Helia Haghighi' },
  robots: { index: false, follow: true },
  alternates: { canonical: undefined },
}

export default function NotFound() {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        background: '#060608',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '18px',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '14px', color: 'var(--amber)', letterSpacing: '0.1em' }}>
        404 Not Found
      </div>
      <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: '28px', fontWeight: 700 }}>
        No endpoint at this address
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
        Try one of these instead:
      </p>
      <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '640px' }}>
        {SECTIONS.map(s => (
          <Link
            key={s.id}
            href={s.href}
            style={{
              fontSize: '14px',
              color: 'var(--purple)',
              padding: '4px 11px',
              border: '0.5px solid var(--purple-border)',
              background: 'var(--purple-bg)',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            {s.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}
