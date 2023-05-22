import '../styles/main.scss'
import type {AppProps} from 'next/app'
import LayoutDefault from "../layout/LayoutDefault";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Script from "next/script";
import {GA_TRACKING_ID, pageview} from "../lib/gtag";
import {useReportWebVitals} from "next/web-vitals";

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()
  const baseUrl = "https://www.qplay.cz"
  const currentPath = router.asPath.split('#')[0].split('?')[0]
  const completePath = baseUrl + (router.asPath === '/' ? '' : currentPath)

  useEffect(() => {
    pageview(window.location.pathname + window.location.search)
  }, [router.pathname, router.query]);

  useReportWebVitals(metric => {
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
      event_label: metric.id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  })

  return (
    <LayoutDefault>
      <Head>
        <title>QPlay.cz</title>
        <meta name="description" content="QPlay Minecraft Server"/>
        <meta name="viewport" content='width=device-width, initial-scale=1'/>
        <link rel="canonical" href={completePath}/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Souhlasím"
      >
        Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním
        tohoto webu s tím souhlasíte.{" "}
        <a
          href="https://www.google.com/intl/cs/policies/technologies/cookies/"
          target="_blank"
          rel="noreferrer"
        >
          Více informací
        </a>
      </CookieConsent>
      <Component {...pageProps} />
    </LayoutDefault>
  )
}

export default MyApp
