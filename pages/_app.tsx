import '../styles/main.scss'
import type {AppProps} from 'next/app'
import LayoutDefault from "../layout/LayoutDefault";
import Head from "next/head";
import Script from "next/script";
import CookieConsent from "react-cookie-consent";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <LayoutDefault>
      <Head>
        <title>QPlay.cz</title>
        <meta name="description" content="QPlay Minecraft Server"/>
        <meta name="viewport" content='width=device-width, initial-scale=1'/>
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="/js/google-analytics.js"/>
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
