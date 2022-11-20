import Head from "next/head"
import Banner from "../../components/Banner";

export default function Helper() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Helper</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici Helper." />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
            <h1>Helper</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h1 style={{textAlign: "center", fontSize: "xx-large"}}>
            <span style={{color: "#000000"}}><b>Nábor na Helpera</b></span>
          </h1>
          <h4><span style={{color: "#000000"}}>Jak se stát Helperem?</span></h4>
          <span style={{color: "#000000"}}>
          Pokud byste se chtěli stát Helperem, tak je aktuálně <b>otevřený nábor!</b> První kolo probíhá formou formuláře.<br />
          Formulář nalezneš na → <a href="https://bit.ly/HelperNabor2022" target="blank_">https://bit.ly/HelperNabor2022</a> <br />
          (1. kolo bude uzavřeno 30.11.2022 v 23:59)
         </span>
         <p></p>
          <h4><span style={{color: "#000000"}}>Výhody Helpera</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Vlastní veškeré MASTER VIP výhody a vybrané LEGEND VIP výhody.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Může se připojit do plného týmu na minihře MiniAnnihilation.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Jednou za měsíc může udělat svou velkou akci na Discordu, kam obdrží zdarma
            odměny do soutěže.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Může pořádat menší akce na Discordu v &quot;QPlay Stage&quot;.
          </span>
          </li>
          <br/>
          <h4><span style={{color: "#000000"}}>Odměna za práci Helpera</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Každý měsíc obdrží určitou sumu coinů za odvedenou práci v
            ticket-systému.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Za odvedenou práci obdrží každý měsíc zpravidla 1x Basic VIP.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            V závislosti na odvedené práci může každý měsíc získat navíc další
            druhy VIP.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Za odvedenou práci může každý měsíc získat navíc různé typy crates.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            V závislosti na odvedené práci může obdržet hmotný balíček.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Po rozhodnutí vedení serveru může za svou odvedenou práci získat
            finanční odměnu.
          </span>
          </li>
        </div>
      </section>
    </div>
  )
}
