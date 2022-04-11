import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content='width=device-width, initial-scale=1'/>
        <meta name="format-detection" content="telephone=no"/>

        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}