'use client'
import { useState, useEffect } from 'react'
// Both SSR and the client's first render must produce identical markup, so
// width starts at a fixed desktop default and only switches to the real
// viewport size after mount. Otherwise the server (no `window`) and a client
// on a phone render different trees and React throws a hydration mismatch.
export function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    setWidth(window.innerWidth)
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return { width, isMobile: width < 768, isTablet: width >= 768 && width < 1024, isSmallMobile: width < 320 }
}
