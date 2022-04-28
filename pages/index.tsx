import type { NextPage } from 'next'
import Link from "next/link"
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
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
    fetchPlayers()

    const timer = setInterval(fetchPlayers, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [fetchPlayers])

  return (
    <div>
      <section className="banner">
        <div className="boxcontainer">
          <div className="box">
            <div>
              <div className="d-flex">
                <h2>IP: <span data-text="Klikni pro zkopírování!" 
                  className="hint"
                  onClick={() => {navigator.clipboard.writeText('mc.qplay.cz')}}>
                    mc.qplay.cz
                    <span className="hint-text">Klikni pro zkopírování!</span>
                  </span>
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
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
              <img src="/images/render.png" />
            </div>
            <div className="col-lg-7 d-flex">
              <div className="content">
                <h1>O <span className="colored">QPLAY.CZ</span></h1>
                <p>Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují.
                  Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k
                  západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka
                  široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové
                  balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí.
                  Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo
                  vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční
                  paprsky.</p>
                <div className="stats">
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <img src="/icons/add-user.svg" />
                      <h2>5,000,000+</h2>
                      <p>Registrovaných hráčů</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <img src="/icons/time-circle.svg" />
                      <h2>780,000+</h2>
                      <p>Odehraných hodin</p>
                    </div>
                    <div className="col-md-4 mb-4">
                      <img src="/icons/game.svg" />
                      <h2>400+</h2>
                      <p>Online hráčů denně</p>
                    </div>
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
              <img src="/images/discord.png" />
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
                    <img src="/icons/coalblock.png" />
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
                    <img src="/icons/ender_pearl.png" />
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
                    <img src="/icons/minecraft_golden_apple.png" />
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
                    <img src="/icons/1vs1.png" />
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
                    <img src="/icons/bed.png" />
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
                    <img src="/icons/crystals.png" />
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
                    <img src="/icons/gold_ingot.png" />
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
                    <img src="/icons/nether_star.png" />
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
                    <img src="/icons/ironsword.png" />
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
