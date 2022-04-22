import Link from "next/link"

export default function Hire() {
  return (
    <div>
      <section id="banner" className="sm">
        <div className="pagename">
            <h1>Nábor</h1>
        </div>
      </section>
      <section id="pagecontent">
        <div className="container">
          <h2>Ranky</h2>
          <li>
            <Link href="/yt" passHref>
              <a>YouTuber</a>
            </Link>
          </li>

          <br/>
          <h2>Nábory</h2>
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