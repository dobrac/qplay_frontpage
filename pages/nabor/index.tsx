import Head from "next/head"
import Link from "next/link"
import Banner from "../../components/Banner";

export default function Hire() {
  return (
    <div>
      <Head>
        <title>Nábor | QPlay.cz</title>
        <meta name="description" content="Seznam všech náborů."/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Nábor</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h2 className="mt-4 mb-4">Ranky</h2>
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
              Helper [Nábor zveřejněn]
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
      </section>
    </div>
  )
}