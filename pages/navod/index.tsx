import Head from "next/head"
import Link from "next/link"
import Banner from "../../components/Banner";

export default function Help() {
  return (
    <div>
      <Head>
        <title>Nápověda | QPlay.cz</title>
        <meta name="description" content="Seznam nápověd."/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Nápověda</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h2 className="mt-4 mb-4">FAQ</h2>
          <li>
            <Link href="/faq" passHref>
              Často kladené otázky
            </Link>
          </li>

          <br/>
          <h2 className="mt-4 mb-4">Návody</h2>

          <li>
            <Link href="/navod/privlastneni-nicku" passHref>
              Můj nick je již zaregistrovaný
            </Link>
          </li>
          <li>
            <Link href="/navod/prihlaseni-bez-hesla" passHref>
              Přihlašování bez hesla/skin na serveru
            </Link>
          </li>
          <li className="external">
            <a href="https://heslo.qplay.cz">Změna hesla</a>
          </li>
        </div>
      </section>
    </div>
  )
}