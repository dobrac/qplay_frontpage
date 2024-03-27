import Head from "next/head"
import Banner from "../components/Banner";
import Link from "next/link";



export default function Groups() {

  return (
    <div>
      <Head>
        <title>Vzpomínky | QPlay.cz</title>
        <meta name="description" content="Vzpomínky Týmu"/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Vzpomínky Teamu</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <div>
            <li>
              <Link href="/vzpominky/vedeni" passHref>
                Vedení Serveru
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/helper" passHref>
                Helper Team
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/moderator" passHref>
                Moderátor Team
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/builder" passHref>
                Builder Team
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/technik" passHref>
                Technik Team
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/cheathunter" passHref>
                CheatHunter Team
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/content" passHref>
                Content Team
              </Link>
            </li>
          </div>
        </div>
      </section>
    </div>
  )
}
