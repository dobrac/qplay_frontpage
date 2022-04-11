import {NextPage} from "next";
import Link from "next/link"
import {ReactChild} from "react";
import {useRouter} from "next/router";
import Script from "next/script";

class MenuItem {
  text: string
  href: string
  external: boolean
  className: string
  items: MenuItem[] = []

  constructor(text: string, href: string, external = false, className = "") {
    this.text = text
    this.href = href
    this.external = external
    this.className = className
  }

  setItems(items: MenuItem[]): MenuItem {
    this.items = items
    return this
  }
}

const menu = [
  new MenuItem("Domů", "/"),
  new MenuItem("Jak se připojit?", "/jak-se-pripojit"),
  new MenuItem("Zaregistrovat se", "https://account.qplay.cz", true),
  new MenuItem("Pravidla", "/pravidla"),
  new MenuItem("VIP účet", "/vip", false, "vip"),
  new MenuItem("Obchod", "https://shrefre.qplay.cz", true, "vip"),
  new MenuItem("Seznam změn", "https://changelog.qplay.cz", true),
  new MenuItem("Pozice", "/nabor").setItems([
    new MenuItem("YouTuber", "/yt"),
    new MenuItem("Technik", "/nabor/technik"),
    new MenuItem("Helper", "/nabor/helper"),
    new MenuItem("Builder", "/nabor/builder"),
    new MenuItem("CheatHunter", "/nabor/cheathunter"),
  ]),
  new MenuItem("Nápověda", "/navod").setItems([
    new MenuItem("FAQ", "/faq"),
    new MenuItem("Můj nick je již zaregistrovaný", "/navod/privlastneni-nicku"),
    new MenuItem("Přihlašování bez hesla/skin na serveru", "/navod/prihlaseni-bez-hesla"),
    new MenuItem("Změna hesla", "https://heslo.qplay.cz", true),
  ]),
  new MenuItem("Kontakt", "/kontakt")
]

function MenuItemRender({item}: { item: MenuItem }) {
  const router = useRouter()

  function isCurrent(path: string): boolean {
    return router.asPath === path
  }

  return (
    <li className={[
      item.external ? "external" : "",
      isCurrent(item.href) ? "current" : "",
      item.className
    ].join(" ")}>
      <Link href={item.href} passHref>
        <a>
          {item.text}
        </a>
      </Link>

      {!!item.items.length && (
        <ul>
          {item.items.map(item => {
            return (<MenuItemRender key={item.text} item={item}/>)
          })}
        </ul>
      )}
    </li>
  )
}

const LayoutDefault: NextPage<{ children: ReactChild | ReactChild[] }> = ({children}) => {
  return (
    <div>
      <div id="page-wrapper">
        <div id="header">
          <h1>
            <Link href="/" passHref>
              <a>
                <img src="/images/logo.png" alt="QPlay"/>
              </a>
            </Link>
          </h1>
          <nav id="nav">
            <ul>
              {menu.map(item => {
                return (
                  <MenuItemRender key={item.text} item={item}/>
                )
              })}
            </ul>
          </nav>
        </div>

        {children}

        <div id="footer">
          <ul className="icons">
            <li><a href="https://minecraft-server-list.cz" target="_blank" rel="noreferrer"/></li>
          </ul>

          <div className="copyright">
            <ul className="menu">
              <li>&copy; QPlay.cz. Všechna práva vyhrazena</li>
              <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Script src="/js/jquery.dropotron.min.js"/>
      <Script src="/js/skel.min.js" strategy="beforeInteractive"/>
      <Script src="/js/util.js"/>
      <Script src="/js/main.js"/>
    </div>
  )
}

export default LayoutDefault