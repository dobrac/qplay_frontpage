import Head from "next/head"
import Banner from "../../components/Banner";

export default function Builder() {
  return (
    <div>
      <Head>
        <title>Builder | QPlay.cz</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici Builder."/>
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
          <h4><span style={{color: "#000000"}}>🎯 Jak se stát Builderem?</span></h4>
          <span style={{color: "#000000"}}>
            Se svými herními údaji se přihlásíš na{" "}
            <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">Informační Panel</a>.{" "}
            Klikni na sekci &quot;Mé tickety&quot; a následně si stačí vytvořit nový
            ticket s typem &quot;Žádost o Buildera&quot;, kde ti bude poskytnuto více
            informací. 
          <br />
          <br />
          </span>
          <h4><span style={{color: "#000000"}}>💎 Co získaš jako Builder</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Veškeré MASTER VIP výhody a vybrané LEGEND VIP výhody.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Fajn kolektiv, který se na tebe už těší. 👐
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Přátelský kolektiv, který ti pomůže nejen v začátcích.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Možnosti kariérního růstu.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Jednou za měsíc můžeš udělat svou vlastní akci na Discordu, kam obdržíš zdarma
            odměny do soutěže.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Můžeš pořádat menší akce na Discordu v &quot;QPlay Stage&quot;.
          </span>
          </li>
          <br/>
          <h4><span style={{color: "#000000"}}>💰 Odměna za práci Buildera</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Každý měsíc obdržíš určitou sumu coinů za počet postavených map.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Za odvedenou práci obdržíš VIPčka.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Za odvedenou práci můžeš každý měsíc získat navíc různé typy crates.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            V závislosti na odvedenou práci můžeš obdržet hmotný balíček. 📦
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Po rozhodnutí Vedení serveru můžeš za svou odvedenou práci získat
            finanční odměnu.
          </span>
          </li>
        </div>
      </section>
    </div>
  )
}
