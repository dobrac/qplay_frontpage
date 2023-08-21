import {NextPage} from "next";
import Link from "next/link"
import {ReactChild, useEffect, useState} from "react";
import {useRouter} from "next/router";
import Footer from "../components/Footer";
import Image from "next/image";
import Logo from "../public/imagesBig/logo.png"

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
  new MenuItem("Připojení", "/jak-se-pripojit"),
  new MenuItem("Pravidla", "/pravidla"),
  new MenuItem("VIP účet", "/vip", false, "special"),
  new MenuItem("Obchod", "https://store.qplay.cz", true, "special"),
  new MenuItem("Seznam změn", "/seznam-zmen"),
  new MenuItem("Pozice", "/pozice").setItems([
    new MenuItem("YouTuber", "/yt"),
    new MenuItem("TikToker", "/tiktoker"),
    new MenuItem("Technik", "/nabor/technik"),
    new MenuItem("Helper [Nábor zveřejněn]", "/nabor/helper"),
    new MenuItem("Moderátor", "/nabor/moderator"),
    new MenuItem("Builder", "/nabor/builder"),
    new MenuItem("CheatHunter", "/nabor/cheathunter"),
  ]),
  new MenuItem("Nápověda", "/navod").setItems([
    new MenuItem("FAQ", "/faq"),
    new MenuItem("Můj nick je již zaregistrovaný", "/navod/privlastneni-nicku"),
    new MenuItem("Přihlašování bez hesla/skin na serveru", "/navod/prihlaseni-bez-hesla"),
    new MenuItem("Změna hesla", "https://heslo.qplay.cz", true),
    new MenuItem("Mapa Survivalu", "https://mapa-survival.qplay.cz", true),

  ]),
  new MenuItem("Kontakt", "/kontakt"),
  new MenuItem("Přihlášení", "https://info.qplay.cz", true, "special")
]

function MenuItemRender({item}: { item: MenuItem }) {
  const router = useRouter()

  function isCurrent(path: string): boolean {
    if (!path.endsWith("/")) {
      path = path + "/"
    }
    return router.asPath === path
  }

  return (
    <li className={[
      item.external ? "external" : "",
      isCurrent(item.href) ? "active" : "",
      item.items.length ? "nav-item dropdown" : "nav-item",
      item.className
    ].join(" ")}>
      <Link href={item.href} className="nav-link" passHref>
        {item.text}
      </Link>

      {!!item.items.length && (
        <ul className="dropdown-menu">
          {item.items.map(item => {
            return (
              <li key={item.text}>
                <Link href={item.href} className="dropdown-item" passHref>
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

const LayoutDefault: NextPage<{ children: ReactChild | ReactChild[] }> = ({children}) => {
  const [navbarShow, setNavbar] = useState(false);
  const [offset, setOffset] = useState(0);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      setNavbar(false);
      document.getElementsByTagName("body")[0].classList.remove("scroll");
    }

    setOffset(window.pageYOffset);

    router.events.on('routeChangeStart', handleRouteChange);

    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const toggleNav = () => {
    setNavbar(!navbarShow);
    document.getElementsByTagName("body")[0].classList.toggle("scroll");
  };

  let Navbar = 'collapse navbar-collapse';
  if (navbarShow) {
    Navbar += ' show';
  }
  let christmas = false;
  let Scrollnav = 'navbar navbar-expand-lg';
  if (offset > 0) {
    Scrollnav += ' sticky';
  } else if (christmas) {
    Scrollnav += ' sticky';
  }

  return (
    <div>
      <nav className={Scrollnav}>
        <div className="container">
          <Link href="/" className="navbar-brand" passHref>
            <div className="navbar-img-container">
              <Image
                src={Logo}
                alt={"logo"}
                width={140}
                height={61}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}/>
            </div>
          </Link>
          <button onClick={(e) => toggleNav()} className="navbar-toggler">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list"
                 viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          <div className={Navbar}>
            <button onClick={(e) => toggleNav()} className="navbar-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg"
                   viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fillRule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
              </svg>
            </button>
            <img className="logocol" src="/imagesBig/logo.png"/>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {menu.map(item => {
                return (
                  <MenuItemRender key={item.text} item={item}/>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <Footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-4 inview">
              <h6 className="text-uppercase fw-bold">
                Užitečné odkazy
              </h6>
              <p>
                <Link href='/' className="text-reset">
                  Domů
                </Link>
              </p>
              <p>
                <Link href='/jak-se-pripojit' className="text-reset">
                  Jak se připojit
                </Link>
              </p>
              <p>
                <Link href='/vip' className="text-reset">
                  VIP
                </Link>
              </p>
              <p>
                <Link href='https://store.qplay.cz/' className="text-reset">
                  Obchod
                </Link>
              </p>
            </div>
            <div className="col-md-3 mt-4 inview">
              <h6 className="text-uppercase fw-bold">
                Pravidla a podmínky
              </h6>
              <p>
                <Link href='/pravidla' className="text-reset">
                  Pravidla
                </Link>
              </p>
              <p>
                <Link href='/pravidla' className="text-reset">
                  Ochrana osobních údajů
                </Link>
              </p>
            </div>
            <div className="col-md-6 d-flex">
              <div className="responsive-icons">
                <div className="icons">
                  <a href="https://www.instagram.com/qplaycz/">
                    <div className="icon instagram">
                      <div className="tooltip">Instagram</div>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             viewBox="0 0 16 16" className="bi bi-instagram">
                          <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                          </path>
                        </svg>
                      </span>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/qplaycz">
                    <div className="icon youtube">
                      <div className="tooltip">YouTube</div>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                             viewBox="0 0 16 16" className="bi bi-youtube">
                          <path
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z">
                          </path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <p className="text-center">© QPlay.cz. Všechna práva vyhrazena <span className="split">|</span> <span
            className="design">Designed by: <a href="https://skypad6000.eu">Skypad6000</a></span></p>
          <p className="text-center">Nejsme nijak spojeni s Mojang Studios</p>
        </div>
      </Footer>
    </div>
  );
}

export default LayoutDefault
