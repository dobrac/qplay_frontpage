import '../styles/main.scss'
import "../public/css/font-awesome.min.css"
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
        <link href="/css/bootstrap.min.css" rel="stylesheet"/>
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="/js/google-analytics.js"/>
      <CookieConsent
        location="bottom"
        buttonText="Souhlasím"
        style={{background: "#3c404d", text: "#d6d6d6"}}
        buttonStyle={{background: "#8bed4f", fontSize: "16px", padding: "8px 24px"}}
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
