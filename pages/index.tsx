import Head from "next/head";
import type {NextPage} from 'next'
import Link from "next/link"
import axios from "axios";
import Image from 'next/image'
import discord from '../public/images/discord.png'
import {useCallback, useEffect, useState} from "react";
import {ChangelogEntry} from "../types/ChangelogEntry";
import ChangelogCard from "../components/ChangelogCard";
import Banner from "../components/Banner";
import ImageCard from "../components/ImageCard";
import {publicControllerApi} from "../api/api-client";
import {take} from "lodash";
import {event} from "../lib/gtag";

const NEWS_COUNT = 3
const SKIN_HEIGHT = 350

interface HomeProps {
  changelogNews: ChangelogEntry[]
}

const Home: NextPage<HomeProps> = ({changelogNews}) => {
  const [players, setPlayers] = useState(-1)
  const [playersMax, setPlayersMax] = useState(-1)
  const playersShow = players > -1 ? players : '---'
  const playersMaxShow = playersMax > -1 ? playersMax : '---'

  const fetchPlayers = useCallback(async () => {
    const data = await publicControllerApi.getPlayersOnline()
    const dataMax = await publicControllerApi.getPlayersMax()
    if (data?.data) {
      setPlayers(data.data)
    }
    if (dataMax?.data) {
      setPlayersMax(dataMax.data)
    }
  }, [])

  useEffect(() => {
    fetchPlayers();

    const timer = setInterval(fetchPlayers, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [fetchPlayers])

  function ChangeLogNewsRender() {
    const news = changelogNews.slice(0, NEWS_COUNT).map(
      (element) => {
        return (
          <ChangelogCard key={element['id']} element={element}/>
        )
      }
    )
    return (
      <div className="row">
        {news}
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>QPlay.cz Minecraft Server</title>
        <meta name="description"
              content="Minecraft server QPlay.cz, který patří mezi největší servery v Česku a Slovensku, byl založen v roce 2015 a nabízí spoustu různých miniher."/>
      </Head>
        <Banner sm={true}>
            <div className="pagename">
                <h1>Děkujeme za vaši podporu!</h1>
            </div>
        </Banner>
        <section className="aboutus">
            <div className="container">
                <h1 className="index-title">Byli jsme Minecraftový server <span className="colored">QPLAY.CZ</span></h1>
                <div className="row">
                    <div className="d-flex">
                        <div className="content">
                            <p>Vážení hráči/Vážené hráčky,<br /> když jsem na podzim roku 2014 odcházel z portálu Survival-Games.cz, byl jsem víc smutný než šťastný. Měl jsem spoustu nápadů a znalostí, které jsem chtěl dále využít. Díky motivaci od majitele Hicoria jsem se rozhodl založit si vlastní server QPlay.cz (tehdy se jmenoval ještě QGames.cz). Vše se vytvářelo od začátku, ale byl kladen velký důraz na detail, propracování věcí a propojení všech miniher. Tahle myšlenka byla od té doby to, v čem byl server odlišný od ostatních. Díky kvalitě jsme se stali unikátními na ČR/SK scéně, a to nejenom kvalitou miniher, ale i infrastrukturou samotných serverů. Ve svém maximu bylo pro chod potřeba 10 fyzických serverů.</p>

                            <p>Bohužel, ne vše trvá věčně. Po 9 letech provozu cítíme, že již nejsme ti stejní nadšení hráči Minecraftu, kteří by trávili hodiny hraním, nebo kteří by měli blízko k aktuálním trendům. Jak už to v životě bývá, tak se každý posouváme a neradi bychom tvořili obsah, ke kterému přestáváme mít blízko. Myslíme si, že nelze tvořit kvalitní obsah bez 100% nasazení a vášně k němu, což již i bylo viditelné v posledních měsících. To je jedním z hlavních důvodů, které nás vedly k rozhodnutí <b>projekt QPlay.cz ke dni 30.3.2024 ukončit.</b></p>

                            <p>Zažili jsme spoustu skvělých milníků. Společně s vámi jsme dosáhli více než 2 milionů zaregistrovaných hráčů, přes 16 miliónů odehraných hodin a na začátku února 2021 jsme pokořili rekord přes 2 500 online hráčů připojených v jeden čas!</p>

                            <p>Děkujeme všem aktuálním, i bývalým členům Admin Teamu, kteří se zasloužili o celý chod server. Děkujeme všem hráčům za důvěru a za nezapomenutelné chvíle v našich životech. Děkujeme všem, kteří nás finančně podporovali a umožnili tak tuhle dlouhou jízdu.
                            </p>
                            <p>
                                Věříme, že jsme zvládli zanechat nezapomenutelnou stopu ve virtuálním světě Minecraftu a doufáme, že jste si hraní na našem serveru užili. Vybudovali jsme společně obrovskou komunitu hráčů a vytvořili spoustu vzpomínek. Jen díky vám jsme patřili mezi největší servery v Česku a na Slovensku!
                            </p>
                            <p>Děkujeme za podporu!<br />
                                <b>Profikk (Majitel) za Tým QPlay.cz</b></p>
                            <div className="stats">
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <img src="/icons/add-user.svg"/>
                                        <h2>2,000,000+</h2>
                                        <p>Registrovaných hráčů</p>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <img src="/icons/game.svg"/>
                                        <h2>16,065,840+</h2>
                                        <p>Odehraných hodin</p>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <img src="/icons/graph-up-arrow.svg"/>
                                        <h2>2,500+</h2>
                                        <p>Rekord online hráčů</p>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <img src="/icons/chat-dots.svg"/>
                                        <h2>2,209,307+</h2>
                                        <p>Odpovědí na ticketech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h1 className="title">Časová osa projektu QPlay.cz</h1>
            <div className="container py-5">
                <div className="main-timeline">
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2014</h3>
                                <ul className="mb-0">
                                    <li>
                                        Založení projektu <b>QGames.cz</b>
                                    </li>
                                    <img className="hide-on-mobile" src="/images/FB_1.jpeg" width="525" alt="facebook"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2015</h3>
                                <ul className="mb-0">
                                    <li>
                                        Přijetí <b>B0hy</b> na pozici vedení
                                    </li>
                                    <li>
                                        Přejmenování projektu na <b>QPlay.cz</b>
                                    </li>
                                    <li>
                                        Zveřejnění minihry <b>MiniAnnihilation</b>
                                    </li>
                                    <li>
                                        Odebrání podpory <b>minecraft verze 1.7 - 1.7.10</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-timeline">
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>2016</h3>
                                    <ul className="mb-0">
                                        <li>
                                            Přijetí <b>Raketka</b> na pozici Hlavní Helper
                                        </li>
                                        <li>
                                            Pokoření hranice <b>2 000 likes</b> na Facebooku QPlay.cz
                                        </li>
                                        <li>
                                            Zveřejnění minihry <b>Crystals</b>
                                        </li>
                                        <li>
                                            Zveřejnění systému podpory <b>info.qplay.cz</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2017</h3>
                                <ul className="mb-0">
                                    <li>
                                        Přijetí <b>Mirek_</b> do Technik Teamu
                                    </li>
                                    <li>
                                        Přijetí <b>_Spetty_</b> do Helper Teamu
                                    </li>
                                    <li>
                                        Překonaná hranice <b>6 000 likes</b> na Facebook QPlay.cz
                                    </li>
                                    <li>
                                        Zveřejnění minihry <b>1vs1</b>
                                    </li>
                                    <li>
                                        Zveřejnění minihry <b>UpDown</b>
                                    </li>
                                    <li>
                                        Zveřejnění minihry <b>VillWitch</b>
                                    </li>
                                    <li>
                                        Zveřejnění minihry <b>Modern BedWars</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-timeline">
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>2018</h3>
                                    <ul className="mb-0">
                                        <li>
                                            Zveřejnění minihry <b>MiniAnni-Run</b>
                                        </li>
                                        <li>
                                            Zveřejnění minihry <b>SkyWars</b>
                                        </li>
                                        <li>
                                            Zveřejnění <b>nárámků QPlay.cz</b>
                                        </li>
                                        <li>
                                            Zveřejnění miniher <b>Arcade-Games</b>
                                        </li>
                                        <li>
                                            Zveřejnění minihry <b>Survival-Games</b>
                                        </li>
                                        <li>
                                            Zveřejnění <b>Instagramu QPlay.cz</b>
                                        </li>
                                        <li>
                                            Vznik <b>CheatHunter Teamu</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2019</h3>
                                <ul className="mb-0">
                                    <li>
                                        Zveřejnění minihry <b>MiniUHC</b>
                                    </li>
                                    <li>
                                        Odchod <b>Raketka</b> z pozice Hlavní Helper
                                    </li>
                                    <li>
                                        Povýšení <b>_Spetty_</b> na pozici Hlavní Helper
                                    </li>
                                    <li>
                                        Zveřejnění dosavadního <b>Main-Lobby</b>
                                    </li>
                                    <li>
                                        Zveřejnění služby <b>changelog.qplay.cz</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-timeline">
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>2020</h3>
                                    <ul className="mb-0">
                                        <li>
                                            Pokoření rekordu <b>1 500 online hráčů</b> připojených v jeden moment!
                                        </li>
                                        <li>
                                            Zveřejnění <b>LEGEND VIP</b>
                                        </li>
                                        <li>
                                            Pokoření rekordu <b>10 000 sledujících</b> na Instagramu QPlay.cz
                                        </li>
                                        <li>
                                            Odchod <b>TheErikCZ</b> z pozice Hlavní Builder
                                        </li>
                                        <li>
                                            Přijetí <b>Jendik</b> na pozici Hlavní Builder
                                        </li>
                                        <li>
                                            Zveřejnění <b>Hestreng SkyWars Event</b>
                                        </li>
                                        <li>
                                            Zveřejnění Bigeho SkyWars Eventu - později známý jako <b>SkyWars-AirDrop</b>
                                        </li>
                                        <li>
                                            Zveřejnění minihry <b>Murder-Mystery</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2021</h3>
                                <ul className="mb-0">
                                    <li>
                                        Rekord přes <b>2 500 online hráčů</b> připojených v jeden moment!
                                    </li>
                                    <li>
                                        Zveřejnění <b>Discordu QPlay.cz</b>
                                    </li>
                                    <li>
                                        Pokoření rekordu <b>15 000 sledujících</b> na Instagramu QPlay.cz
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-timeline">
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>2022</h3>
                                    <ul className="mb-0">
                                        <li>
                                            Dosažení <b>100 příspěvků</b> na Instagramu QPlay.cz
                                        </li>
                                        <li>
                                            Zveřejnění nové verze systému podpory <b>info.qplay.cz</b>
                                        </li>
                                        <li>
                                            Zveřejnění obchodu <b>store.qplay.cz</b>
                                        </li>
                                        <li>
                                            Odchod <b>Jendik</b> z pozice Hlavní Builder
                                        </li>
                                        <li>
                                            Přijetí <b>Dejviq_</b> na pozici Hlavní Builder
                                        </li>
                                        <li>
                                            Povýšení <b>_Spetty_</b> na pozici Vedení
                                        </li>
                                        <li>
                                            Povýšení <b>ItzTadeas</b> na pozici Hlavní Helper
                                        </li>
                                        <li>
                                            Zveřejnění <b>Survival</b> části serveru
                                        </li>
                                        <li>
                                            Vznik Moderátor Týmu s Hlavním Moderátorem <b>Dastrokk</b>
                                        </li>
                                        <li>
                                            Zveřejnění minihry <b>Teams</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2023</h3>
                                <ul className="mb-0">
                                    <li>
                                        Povýšení <b>_razorRalfcz</b> na pozici PR Manager
                                    </li>
                                    <li>
                                        Zveřejnění minihry <b>EggWars</b>
                                    </li>
                                    <li>
                                        Zveřejnění <b>TikTok</b> profilu QPlay.cz
                                    </li>
                                    <li>
                                        Odchod <b>B0hy</b> z pozice Vedení
                                    </li>
                                    <li>
                                        Odchod <b>Dastrokk</b> z pozice Hlavní Moderátor, přesun na pozici Quality Manager
                                    </li>
                                    <li>
                                        Povýšení <b>Ayessha</b> na pozici Hlavní Moderátorka
                                    </li>
                                    <li>
                                        Zveřejnění <b>Survival Infinity</b> Updatu
                                    </li>
                                    <li>
                                        Povýšení <b>Mirek_</b> na pozici Vedení
                                    </li>
                                    <li>
                                        Povýšení <b>_Math3w_</b> na pozici Hlavní Technik
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-timeline">
                        <div className="timeline left">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>2024</h3>
                                    <ul className="mb-0">
                                        <li>
                                            Ukončení projektu <b>QPlay.cz</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="discord">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Discord</h1>
                        <p>Připoj se na náš discord. </p>
                        
                        <a href="https://discord.qplay.cz/">
                            <button>Přidat se k discordu</button>
                        </a>
                    </div>
                    <div className="col-md-5 d-flex">
                        <div className="discordimg">
                            <Image
                                src={discord}
                                alt="discord"
                                width={300}
                                height={242}
                                quality={100}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <section className="news">
        <div className="container">
          <h1 className="title">Historie změn</h1>
          <ChangeLogNewsRender/>
          <Link href="/seznam-zmen" passHref className="button">
            <button className="mt-2">Zobrazit všechny změny</button>
          </Link>
        </div>
      </section>
      <section className="oursites">
        <div className="container">
          <h1>Naše sociální sítě</h1>
          <div className="sitesbox">
            <a href="https://www.instagram.com/qplaycz/">
              <div className="site instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <h2>Instagram</h2>
              </div>
            </a>
            <a href="https://www.youtube.com/qplaycz">
              <div className="site youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
                <h2>YouTube</h2>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get<ChangelogEntry[]>(
    'https://changelog.qplay.cz/api/changelog'
  )

  let changelogNews: ChangelogEntry[] = []
  if (res?.data) {
    changelogNews = take(res.data.filter((item) => item.published), NEWS_COUNT)
  }

  return {
    props: {
      changelogNews: changelogNews
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export default Home
