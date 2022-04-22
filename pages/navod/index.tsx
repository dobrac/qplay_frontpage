import Link from "next/link"

export default function Help() {
  return (
    <div>
      <section id="banner" className="sm">
        <div className="pagename">
            <h1>Nápověda</h1>
        </div>
      </section>
      <section id="pagecontent">
        <div className="container">
          <h2>FAQ</h2>
          <li>
            <Link href="/faq" passHref>
              <a>Často kladené otázky</a>
            </Link>
          </li>

          <br/>
          <h2>Návody</h2>

          <li>
            <Link href="/navod/privlastneni-nicku" passHref>
              <a>Můj nick je již zaregistrovaný</a>
            </Link>
          </li>
          <li>
            <Link href="/navod/prihlaseni-bez-hesla" passHref>
              <a>Přihlašování bez hesla/skin na serveru</a>
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