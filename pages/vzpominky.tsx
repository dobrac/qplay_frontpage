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
                Vedení
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/helper" passHref>
                Helper Tým
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/moderator" passHref>
                Moderátor Tým
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/builder" passHref>
                Builder Tým
              </Link>
            </li>
            <li>
              <Link href="/vzpominky/technik" passHref>
                Technik Tým
              </Link>
            </li>
{/*            <li>
              <Link href="/vzpominky/cheathunter" passHref>
                CheatHunter Tým
              </Link>
            </li>*/}
            <li>
              <Link href="/vzpominky/content" passHref>
                Content Tým
              </Link>
            </li>
          </div>
        </div>
      </section>
    </div>
  )
}
