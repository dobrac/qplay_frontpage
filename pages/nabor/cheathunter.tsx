import Head from "next/head"
import Banner from "../../components/Banner";

export default function CheatHunter() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | CheatHunter</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici CheatHunter." />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
            <h1>CheatHunter</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h1 style={{textAlign: "center", fontSize: "xx-large"}}>
            <span style={{color: "#000000"}}><b>Nábor na CheatHuntera</b></span>
          </h1>
          <h4><span style={{color: "#000000"}}>Jak se stát CheatHunterem?</span></h4>
          <ul>
          <span style={{color: "#000000"}}>
            Pro získání skupiny CheatHunter stačí aktivně nahlašovat cheatery na
            serveru skrz příkaz <b>/report nick</b>, bližší informace k tomuto
            příkazu naleznete v{" "}
            <a
              href="https://qplay.cz/faq#Jak%20lze%20ze%20serveru%20nahlásit%20cheatera?"
              target="_blank" rel="noreferrer"
            >FAQ</a
            >. Záleží i na Vaší úspěšnosti při nahlašování, tzn. cheatery
            nahlašujte pouze při 100% jistotě. V případě, že bychom Vás vybrali,
            tak Vás sami zastihneme a pozici Vám nabídneme.
          </span>
          </ul>
          <h4><span style={{color: "#000000"}}>Výhody CheatHuntera</span></h4>
          <ul>
            <li>
            <span style={{color: "#000000"}}
            >Vlastní veškeré MEDIUM VIP výhody.</span
            >
            </li>
            <li>
            <span style={{color: "#000000"}}>
              Může sám zabanovat cheatera na aréně.
            </span>
            </li>
          </ul>
          <h4>
            <span style={{color: "#000000"}}>Odměna za práci CheatHuntera</span>
          </h4>
          <ul>
          <span style={{color: "#000000"}}>
            Každý měsíc obdrží určitou sumu coinů za odvedenou práci na serveru.
          </span>
          </ul>
          <li>
          <span style={{color: "#000000"}}>
            Za odvedenou práci může každý měsíc získat navíc různé typy crates.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            V závislosti na odvedené práci může každý měsíc získat navíc různé
            druhy VIP.
          </span>
          </li>
        </div>
      </section>
    </div>
  )
}