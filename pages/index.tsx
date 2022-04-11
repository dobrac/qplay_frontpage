import type {NextPage} from 'next'
import Link from "next/link"
import axios from "axios";
import {useCallback, useEffect, useState} from "react";

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
      {/* <!--nuxt-link to="/vip">
        <section class="banner zoomBanner">&nbsp;</section>
      </nuxt-link>-->*/}
      <section className="banner">&nbsp;</section>

      <section className="banner" style={{backgroundImage: "none", height: "inherit"}}>
        <header className="external" style={{"position": "relative"}}>
          <a href="https://info.qplay.cz/" target="_blank" className="button" rel="noreferrer">
            Přihlášení do Info Panelu
          </a>
        </header>
      </section>
      <section className="wrapper style2">
        <div className="container">
          <header className="major">
            <h2>mc.qplay.cz</h2>
            <p>Online Players: {playersShow}/{playersMaxShow}</p>
          </header>
        </div>
      </section>
      <section id="cta" className="wrapper style3">
        <div className="container">
          <header>
            <h2>Chceš se také připojit?</h2>
            <Link href="/jak-se-pripojit" passHref>
              <a className="button">Klikni zde</a>
            </Link>
          </header>
          <div className="links">
            <div>
              <a
                href="https://www.instagram.com/qplaycz/"
                target="_blank"
                rel="noreferrer"
              >Instagram</a
              >
            </div>
            <div>
              <a
                href="https://www.youtube.com/qplaycz"
                target="_blank"
                rel="noreferrer"
              >Youtube</a
              >
            </div>
            <div>
              <a
                href="https://discord.qplay.cz"
                target="_blank"
                rel="noreferrer"
              >Discord</a
              >
            </div>
            <div>
              <a
                href="https://store.qplay.cz/"
                target="_blank"
                rel="noreferrer"
              >Store</a
              >
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper style1">
        <div className="container">
          <div className="row 200%">
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/coalblock.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>MiniAnnihilation</h3>
                <p>
                  Natěž si suroviny, ze kterých si vytvoříš své brnění a nástroje.
                  Ovládni střed mapy, abys získal i diamantové věci. Poté znič
                  nexus ostatním týmům.
                </p>
              </div>
            </section>
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/ender_pearl.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>SkyWars</h3>
                <p>
                  Posbírej z truhel na ostrovech ty nejlepší věci pro boj a zabij
                  všechny nepřátele.
                </p>
              </div>
            </section>
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/minecraft_golden_apple.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>MiniUHC</h3>
                <p>
                  Natěž si ve volné přírodě co nejlepší suroviny a zabij všechny
                  nepřátele.
                </p>
              </div>
            </section>
          </div>
          <div className="row 200%">
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/1vs1.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>1vs1</h3>
                <p>
                  Myslíš si, že jsi výborný zabiják? Dokaž to! Vyzvi svého
                  kamaráda nebo náhodného hráče na souboj a zab ho.
                </p>
              </div>
            </section>
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/bed.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>BedWars</h3>
                <p>
                  Nasbírej na svém ostrově co nejvíce ingotů (bronze, iron, gold),
                  zakup si věci u vesničana a znič postel ostatním týmům.
                </p>
              </div>
            </section>
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/crystals.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>Crystals</h3>
                <p>
                  Natěž si na svém ostrově suroviny, zakup si u vesničana
                  speciální předměty a připrav se k boji. Jakmile budeš připraven,
                  znič srdce ostatním týmům.
                </p>
              </div>
            </section>
          </div>
          <div className="row 200%">
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/gold_ingot.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>GoldRush</h3>
                <p>
                  Nakup si za získané levely věci k boji a získej od pig-zombie
                  pro svůj tým co nejvíce zlatých cihel.
                </p>
              </div>
            </section>
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/nether_star.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>MicroBattle</h3>
                <p>
                  Chop se zbraně se svým spoluhráčem a vyzabíjej na mapě všechny
                  nepřátele.
                </p>
              </div>
            </section>
            <section className="4u 12u(narrower)">
              <div className="box highlight">
                <i
                  style={{
                    backgroundImage: "url(icons/ironsword.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="icon major"
                />
                <h3>Murder Mystery</h3>
                <p>
                  Sbírej gold ingoty, za které získáš šíp, a následně zabij
                  Murdera. V roli Murdera zabij všechny ostatní hráče.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
