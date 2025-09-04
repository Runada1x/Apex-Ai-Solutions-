'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement | null
        prefill: object
        utm: object
      }) => void
    }
  }
}

interface CalendlyWidgetProps {
  url: string
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Initialize Calendly widget when script loads
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.getElementById('calendly-container'),
          prefill: {},
          utm: {}
        })
        clearInterval(checkCalendly)
      }
    }, 100)

    return () => {
      clearInterval(checkCalendly)
    }
  }, [url])

  return (
    <div 
      id="calendly-container"
      className="w-full"
      style={{ minHeight: '700px' }}
    />
  )
}