'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  const gaTagId = process.env.NEXT_PUBLIC_GA_TAG_ID ?? null

  if (gaTagId == null || gaTagId.length == 0) {
    return <></>
  }

  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTagId}`}
      />
      <Script id='gtag-init' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaTagId}');
        `}
      </Script>
    </>
  )
}
