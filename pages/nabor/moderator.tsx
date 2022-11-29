import Head from "next/head"
import Banner from "../../components/Banner";

export default function Moderator() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Moderátor</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici Moderátor." />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
            <h1>Moderátor</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h1 style={{textAlign: "center", fontSize: "xx-large"}}>
            <span style={{color: "#000000"}}><b>Nábor na Moderátory</b></span>
          </h1>
          <h4><span style={{color: "#000000"}}>Náplň pozice</span></h4>
          <span style={{color: "#000000"}}>
          Jedná se o pozici, jejíž naplní je převážně pomáhaní hráčům, když si nebudou vědět rady, na našem Survival serveru.
          </span> 
          <p></p>
          <h4><span style={{color: "#000000"}}>Jak se stát Moderátorem?</span></h4>
          <span style={{color: "#000000"}}> 
            Se svými herními údaji se přihlásíte na{" "}
            <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">Informační Panel</a>{" "}. 
            Kliknete na sekci &quot;Mé tickety&quot; a následně si stačí vytvořit nový
            ticket s typem &quot;Žádost o Moderátora&quot;, kde vám bude poskytnuto více
            informací.
          </span>
         <p></p>
          <h4><span style={{color: "#000000"}}>Výhody Moderátora</span></h4>
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
          <h4><span style={{color: "#000000"}}>Odměna za práci Moderátora</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Každý měsíc obdrží určité odměny na survival serveru.
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
