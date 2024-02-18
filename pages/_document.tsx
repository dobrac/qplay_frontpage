import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="format-detection" content="telephone=no"/>

        <link href="/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}