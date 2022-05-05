import type { NextPage } from 'next'
import Link from "next/link"
import axios from "axios";
import Image from 'next/image'
import render from '../public/images/render.png'
import discord from '../public/images/discord.png'
import miniannihilation from '../public/icons/miniannihilation.png'
import skywars from '../public/icons/skywars.png'
import miniuhc from '../public/icons/miniuhc.png'
import onevsone from '../public/icons/1vs1.png'
import bedwars from '../public/icons/bedwars.png'
import crystals from '../public/icons/crystals.png'
import goldrush from '../public/icons/goldrush.png'
import microbattle from '../public/icons/microbattle.png'
import murdermystery from '../public/icons/murdermystery.png'
import teams from '../public/icons/teams.png'
import { useCallback, useEffect, useState } from "react";
import { ChangelogEntry } from "../types/ChangelogEntry";
import ChangelogCard from "../components/ChangelogCard";

interface HomeProps {
  changelogNews: ChangelogEntry[]
}

const Home: NextPage<HomeProps> = ({ changelogNews }) => {
  const [players, setPlayers] = useState(-1)
  const [playersMax, setPlayersMax] = useState(-1)
  const playersShow = players > -1 ? players : '---'
  const playersMaxShow = playersMax > -1 ? playersMax : '---'

  const fetchPlayers = useCallback(async () => {
    const data = await axios.get(
      'https://api.info.qplay.cz/public/players/online'
    )
    const dataMax = await axios.get(
      'https://api.info.qplay.cz/public/players/max'
    )
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
    const news = changelogNews.slice(0, 3).map(
      (element) => {
        return (
          <ChangelogCard key={element['id']} element={element} />
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
      <section className="banner">
        <div className="boxcontainer">
          <div className="box">
            <div>
              <div className="d-flex">
                <h2>IP: <span data-text="Klikni pro zkopírování!"
                  className="hint"
                  onClick={() => { navigator.clipboard.writeText('mc.qplay.cz') }}>
                  mc.qplay.cz
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="d-inline">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                  </svg>
                  <span className="hint-text">Klikni pro zkopírování!</span>
                </span>
                </h2>
              </div>
              <p>Online hráči: {playersShow}/{playersMaxShow}</p>
            </div>
            <Link href="/jak-se-pripojit" passHref>
              <a className="button"><button>Jak se připojit</button></a>
            </Link>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="container">
          <h1 className="title">O nás</h1>
          <div className="row">
            <div className="col-lg-5">
              <div className="render">
                <Image src={render} width={277} height={450} quality={100} />
              </div>
            </div>
            <div className="col-lg-7 d-flex">
              <div className="content">
                <h1>O <span className="colored">QPLAY.CZ</span></h1>
                <p>Minecraft server QPlay.cz, který patří mezi největší servery v Česku a Slovensku, byl založen v roce 2015 a nabízí spoustu různých miniher.
                  Za své dlouhodobé působení na česko-slovenské scéně se pyšní pokročilým technickým nastavením. Server vytvořil i své vlastní minihry Crystals, Teams a MiniAnnihilation. Dále si můžete na serveru zahrát minihry, které jsou známé především ze zahraničí - BedWars, SkyWars, 1vs1, MurderMystery a další.
                  Přijďte si užít hru Minecraft na serveru QPlay.</p>
                <div className="stats">
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconly/Light/Add-User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="Add-User" transform="translate(2.000000, 2.000000)" stroke="#000000" stroke-width="1.5">
                            <path d="M7.8766,13.2062 C4.0326,13.2062 0.7496,13.7872 0.7496,16.1152 C0.7496,18.4432 4.0126,19.0452 7.8766,19.0452 C11.7216,19.0452 15.0036,18.4632 15.0036,16.1362 C15.0036,13.8092 11.7416,13.2062 7.8766,13.2062 Z" id="Stroke-1"></path>
                            <path d="M7.8766,9.8859 C10.3996,9.8859 12.4446,7.8409 12.4446,5.3179 C12.4446,2.7949 10.3996,0.7499 7.8766,0.7499 C5.3546,0.7499 3.30957019,2.7949 3.30957019,5.3179 C3.3006,7.8319 5.3306,9.8769 7.8456,9.8859 L7.8766,9.8859 Z" id="Stroke-3"></path>
                            <line x1="17.2037" y1="6.6691" x2="17.2037" y2="10.6791" id="Stroke-5"></line>
                            <line x1="19.2496" y1="8.674" x2="15.1596" y2="8.674" id="Stroke-7"></line>
                          </g>
                        </g>
                      </svg>
                      <h2>1,900,000+</h2>
                      <p>Registrovaných hráčů</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconly/Light/Time-Circle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="Time-Circle" transform="translate(2.000000, 2.000000)" stroke="#000000" stroke-width="1.5">
                            <path d="M19.2498,10.0005 C19.2498,15.1095 15.1088,19.2505 9.9998,19.2505 C4.8908,19.2505 0.7498,15.1095 0.7498,10.0005 C0.7498,4.8915 4.8908,0.7505 9.9998,0.7505 C15.1088,0.7505 19.2498,4.8915 19.2498,10.0005 Z" id="Stroke-1"></path>
                            <polyline id="Stroke-3" points="13.4314 12.9429 9.6614 10.6939 9.6614 5.8469"></polyline>
                          </g>
                        </g>
                      </svg>
                      <h2>14,000,000+</h2>
                      <p>Odehraných hodin</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Iconly/Light/Game" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                          <g id="Game" transform="translate(2.000000, 2.000000)" stroke="#000000" stroke-width="1.5">
                            <line x1="6.84825686" y1="10.3140022" x2="6.84825686" y2="14.0589969" id="Stroke-1"></line>
                            <line x1="8.75903359" y1="12.1867073" x2="4.93790399" y2="12.1867073" id="Stroke-2"></line>
                            <line x1="13.3661121" y1="10.4280345" x2="13.2590866" y2="10.4280345" id="Stroke-3"></line>
                            <line x1="15.1796122" y1="14.0026039" x2="15.0725866" y2="14.0026039" id="Stroke-4"></line>
                            <path d="M6.07216276,5.32907052e-15 L6.07216276,5.32907052e-15 C6.07216276,0.740482877 6.68464554,1.34076212 7.44018226,1.34076212 L8.49666207,1.34076212 C9.66228674,1.34491631 10.6064427,2.27026027 10.611741,3.41266022 L10.611741,4.08771473" id="Stroke-5"></path>
                            <path d="M14.4283141,19.9626083 C11.4231218,20.013497 8.47303168,20.0114199 5.57274558,19.9626083 C2.35350217,19.9626083 0,17.6663844 0,14.5112835 L0,9.86171565 C0,6.70661469 2.35350217,4.41039079 5.57274558,4.41039079 C8.48892657,4.36054061 11.441136,4.36157916 14.4283141,4.41039079 C17.6475575,4.41039079 20,6.70765324 20,9.86171565 L20,14.5112835 C20,17.6663844 17.6475575,19.9626083 14.4283141,19.9626083 Z" id="Stroke-7"></path>
                          </g>
                        </g>
                      </svg>
                      <h2>500+</h2>
                      <p>Online hráčů denně</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="oursites">
        <div className="container">
          <h1>Naše sociální sítě</h1>
          <div className="sitesbox">
            <a href="https://www.instagram.com/qplaycz/">
              <div className="site instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <h2>Instagram</h2>
              </div>
            </a>
            <a href="https://www.youtube.com/qplaycz">
              <div className="site youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
                <h2>YouTube</h2>
              </div>
            </a>
            <a href="https://www.facebook.com/QPlay.cz/">
              <div className="site facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <h2>Facebook</h2>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <h1 className="title">Nejnovější změny</h1>
          <ChangeLogNewsRender />
          <Link href="/seznam-zmen" passHref>
            <a className="button"><button className="mt-2">Zobrazit všechny změny</button></a>
          </Link>
        </div>
      </section>
      <section className="discord">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>Discord</h1>
              <p>Připoj se na náš discord a propoj si účet pro získání zajímavých výhod</p>
              <ul>
                <li>Máte přístup do místnosti #general 🎮</li>
                <li>Otevře se vám místnost #pomoc-mezi-hráči, ve které můžete požádat o pomoc druhých hráčů, nebo naopak druhým hráčům můžete pomoct vy 👥</li>
                <li>Máte přístup do mnoha dalších text channelů pod sekcí Komunita | QPlay a Komunita | Ostatní ✌️</li>
                <li>Máte k dispozici několik volných voice místností 🗣️</li>
                <li>Máte možnost se zúčastňovat herních akcí! Pokud bude probíhat akce, zjistíte to v místnosti oznámení 🎲</li>
                <li>Pokud na serveru vlastníte jakékoliv VIP, tak automaticky obdržíte roli &quot;VIP&quot;. Navíc obdržíte přístup do VIP chatu #vip-chat 💎</li>
              </ul>
              <a href="https://discord.qplay.cz/"><button>Přidat se k discordu</button></a>
            </div>
            <div className="col-md-5 d-flex">
              <div className="discordimg">
                <Image src={discord} width={300} height={242} quality={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="games">
        <div className="container">
          <h1 className="title">Naše minihry</h1>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/minianni.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={miniannihilation} height={80} width={80} quality={100} />
                    </div>
                    <h3>MiniAnnihilation</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Natěž si suroviny, ze kterých si vytvoříš své brnění a nástroje. Ovládni střed mapy, abys získal i diamantové věci. Poté znič nexus ostatním týmům.</p>
                    <h4>Seznam serverů</h4>
                    <ul>
                      <li>MiniAnni Run (5v5v5v5)</li>
                      <li>MiniAnni (10v10v10v10)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/skywars.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={skywars} height={80} width={80} quality={100} />
                    </div>
                    <h3>SkyWars</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Posbírej z truhel na ostrovech ty nejlepší věci pro boj a zabij všechny nepřátele.</p>
                    <h4>Seznam serverů</h4>
                    <ul>
                      <li>SkyWars Solo</li>
                      <li>Bigeho Event</li>
                      <li>SkyWars Duo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/miniuhc.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={miniuhc} height={80} width={80} quality={100} />
                    </div>
                    <h3>MiniUHC</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Natěž si ve volné přírodě co nejlepší suroviny a zabij všechny nepřátele.</p>
                    <h4>Seznam serverů</h4>
                    <ul>
                      <li>MiniUHC Duo</li>
                      <li>MiniUHC Trio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/1vs1.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={onevsone} height={80} width={80} quality={100} />
                    </div>
                    <h3>1vs1</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Myslíš si, že jsi výborný zabiják? Dokaž to! Vyzvi svého kamaráda nebo náhodného hráče na souboj a zab ho.</p>
                    <h4>Seznam serverů</h4>
                    <ul>
                      <li>Training</li>
                      <li>Archer</li>
                      <li>BuildUHC</li>
                      <li>Ranked</li>
                      <li>TheBrigde</li>
                      <li>Sumo</li>
                      <li>SkyWars</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/bedwars.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={bedwars} height={80} width={80} quality={100} />
                    </div>
                    <h3>BedWars</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Nasbírej na svém ostrově co nejvíce ingotů (bronze, iron, gold), zakup si věci u vesničana a znič postel ostatním týmům.</p>
                    <h4>Seznam serverů</h4>
                    <ul>
                      <li>BedWars Solo (1v1v1v1)</li>
                      <li>BedWars Duo (2v2v2v2)</li>
                      <li>BedWars Squad (4v4v4v4)</li>
                      <li>BedWars Modern Duo (2v2v2v2v2v2)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/crystals.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={crystals} height={80} width={80} quality={100} />
                    </div>
                    <h3>Crystals</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Natěž si na svém ostrově suroviny, zakup si u vesničana speciální předměty a připrav se k boji. Jakmile budeš připraven, znič srdce ostatním týmům.</p>
                    <h4>Seznam serverů</h4>
                    <ul>
                      <li>Crystals (10v10v10v10)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/arcade.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={goldrush} height={80} width={80} quality={100} />
                    </div>
                    <h3>GoldRush</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Nakup si za získané levely věci k boji a získej od pig-zombie pro svůj tým co nejvíce zlatých cihel.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/arcade.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={microbattle} height={80} width={80} quality={100} />
                    </div>
                    <h3>MicroBattle</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Chop se zbraně se svým spoluhráčem a vyzabíjej na mapě všechny nepřátele.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/arcade.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={murdermystery} height={80} width={80} quality={100} />
                    </div>
                    <h3>Murder Mystery</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Sbírej gold ingoty, za které získáš šíp, a následně zabij Murdera. V roli Murdera zabij všechny ostatní hráče.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div
                  className="card-top"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),url(/imgServers/teams.png)"
                  }}>
                  <div className="header">
                    <div className="imageicon">
                      <Image src={teams} height={80} width={80} quality={100} />
                    </div>
                    <h3>Teams</h3>
                  </div>
                </div>
                <div className="card-body">
                  <div className="content">
                    <p>Sbírej speciální itemy, zabíjej bosse, obsaď XP farmu na středu mapy a znič nepřátelské nexusy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios.get<ChangelogEntry[]>(
    'https://changelog.qplay.cz/api/changelog'
  )

  let changelogNews: ChangelogEntry[] = []
  if (res?.data) {
    changelogNews = res.data.filter((item) => item.published)
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
