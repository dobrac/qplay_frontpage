import Head from "next/head"
import Link from "next/link"

export default function Hire() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Nábor</title>
        <meta name="description" content="Seznam všech náborů." />
      </Head>
      <section className="banner sm">
        <div className="pagename">
            <h1>Nábor</h1>
        </div>
      </section>
      <section className="pagecontent">
        <div className="container">
          <h2 className="mt-4 mb-4">Ranky</h2>
          <li>
            <Link href="/yt" passHref>
              <a>YouTuber</a>
            </Link>
          </li>

          <br/>
          <h2 className="mt-4 mb-4">Nábory</h2>
          <li>
            <Link href="/nabor/technik" passHref>
              <a>Technik</a>
            </Link>
          </li>
          <li>
            <Link href="/nabor/helper" passHref>
              <a>Helper</a>
            </Link>
          </li>
          <li>
            <Link href="/nabor/builder" passHref>
              <a>Builder</a>
            </Link>
          </li>
          <li>
            <Link href="/nabor/cheathunter" passHref>
              <a>CheatHunter</a>
            </Link>
          </li>
        </div>
      </section>
    </div>
  )
}