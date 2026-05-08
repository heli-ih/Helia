'use client'
import { useState, useEffect } from 'react'

export function useClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const uae = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }))
      const h = String(uae.getHours()).padStart(2, '0')
      const m = String(uae.getMinutes()).padStart(2, '0')
      setTime(`${h}:${m}`)
    }
    update()
    const id = setInterval(update, 10000)
    return () => clearInterval(id)
  }, [])

  return time
}
