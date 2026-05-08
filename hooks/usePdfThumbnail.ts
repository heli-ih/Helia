'use client'
import { useEffect, useState } from 'react'

// PDF.js 4.x is the first version with proper ESM builds (`.mjs`). v3 only
// shipped UMD which doesn't work with dynamic `import()`.
const PDFJS_VERSION = '4.0.379'
const PDFJS_LIB_URL = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.mjs`
const PDFJS_WORKER_URL = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.mjs`

// Load PDF.js once across the app. Function() bypasses webpack/Turbopack
// static analysis so the URL stays as-is at runtime.
let pdfjsPromise: Promise<any> | null = null

function loadPdfjs(): Promise<any> {
  if (!pdfjsPromise) {
    pdfjsPromise = (Function(`return import("${PDFJS_LIB_URL}")`)() as Promise<any>)
      .then((mod) => {
        mod.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL
        return mod
      })
      .catch((err) => {
        pdfjsPromise = null
        throw err
      })
  }
  return pdfjsPromise
}

// Cache rendered thumbnails by URL so re-renders don't re-rasterize.
const cache = new Map<string, string>()

/**
 * Renders the first page of a PDF URL into a JPEG data URL via PDF.js + canvas.
 * Returns null until the rasterization completes (or if the URL isn't a PDF).
 * The caller can then use the data URL as an <img src=…> with zero browser
 * PDF chrome, since it's a plain raster image.
 */
export function usePdfThumbnail(url: string | null): string | null {
  const [thumb, setThumb] = useState<string | null>(url ? cache.get(url) ?? null : null)

  useEffect(() => {
    if (!url || !url.toLowerCase().includes('.pdf')) return
    if (cache.has(url)) {
      setThumb(cache.get(url) ?? null)
      return
    }

    let cancelled = false
    const run = async () => {
      try {
        const pdfjsLib = await loadPdfjs()
        const pdf = await pdfjsLib.getDocument({ url }).promise
        const page = await pdf.getPage(1)
        const viewport = page.getViewport({ scale: 1.4 })
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        await page.render({ canvasContext: ctx, viewport }).promise
        if (cancelled) return
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85)
        cache.set(url, dataUrl)
        setThumb(dataUrl)
      } catch (err) {
        // Fall back silently — UI shows the gradient placeholder.
        // eslint-disable-next-line no-console
        console.warn('PDF thumbnail failed:', url, err)
      }
    }
    run()
    return () => { cancelled = true }
  }, [url])

  return thumb
}
