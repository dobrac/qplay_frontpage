import Head from "next/head"
import Banner from "../../components/Banner";

export default function Builder() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Builder</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici Builder." />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
            <h1>Builder</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h1 style={{textAlign: "center", fontSize: "xx-large"}}>
            <span style={{color: "#000000"}}><b>Nábor na Buildera</b></span>
          </h1>
          <h4><span style={{color: "#000000"}}>Jak se stát Builderem?</span></h4>
          <ul>
          <span style={{color: "#000000"}}>
            Se svými herními údaji se přihlásíte na{" "}
            <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">Informační Panel</a>{" "}
            . Kliknete na sekci &quot;Mé tickety&quot; a následně si stačí vytvořit nový
            ticket s typem &quot;Žádost o Buildera&quot;, kde vám bude poskytnuto více
            informací.
          </span>
          </ul>
          <h4><span style={{color: "#000000"}}>Výhody Buildera</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Vlastní veškeré MASTER VIP výhody a vybrané LEGEND VIP výhody.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Může se připojit do plného týmu na minihře MiniAnnihilation a
            Crystals.
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
          <h4><span style={{color: "#000000"}}>Odměna za práci Buildera</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Každý měsíc obdrží určitou sumu coinů za počet postavených map.
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