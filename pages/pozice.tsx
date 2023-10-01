import Head from "next/head"
import Banner from "../components/Banner";
import Link from "next/link";



export default function Groups() {

  return (
    <div>
      <Head>
        <title>Pozice | QPlay.cz</title>
        <meta name="description" content="Pozice na serveru QPlay.cz"/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Pozice</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <div>
            <h2 className="mb-4">Ranky</h2>
            <li>
              <Link href="/yt" passHref>
                YouTuber
              </Link>
            </li>
            <li>
              <Link href="/tiktoker" passHref>
                TikToker
              </Link>
            </li>

            <br/>
            <h2 className="mt-4 mb-4">Nábory</h2>
            <li>
              <Link href="/nabor/technik" passHref>
                Technik
              </Link>
            </li>
            <li>
              <Link href="/nabor/helper" passHref>
                Helper
              </Link>
            </li>
            <li>
              <Link href="/nabor/moderator" passHref>
                Moderátor
              </Link>
            </li>
            <li>
              <Link href="/nabor/builder" passHref>
                Builder
              </Link>
            </li>
            <li>
              <Link href="/nabor/cheathunter" passHref>
                CheatHunter
              </Link>
            </li>
          </div>
        </div>
      </section>
    </div>
  )
}
