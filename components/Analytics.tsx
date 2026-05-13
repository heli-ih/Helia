'use client'
import { useEffect } from 'react'
import { app } from '@/app/firebase'

export default function Analytics() {
  useEffect(() => {
    (async () => {
      const { getAnalytics, isSupported } = await import('firebase/analytics')
      if (await isSupported()) {
        getAnalytics(app)
      }
    })()
  }, [])
  return null
}
