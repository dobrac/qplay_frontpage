import Head from "next/head"

export default function Technik() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Technik</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici Technik." />
      </Head>
      <section className="banner sm">
        <div className="pagename">
            <h1>Technik</h1>
        </div>
      </section>
      <section className="pagecontent">
        <div className="container">
          <h1 style={{textAlign: "center", fontSize: "xx-large"}}>
            <span style={{color: "#000000"}}><b>Nábor na Technika</b></span>
          </h1>
          <h4><span style={{color: "#000000"}}>Jak se stát Technikem?</span></h4>
          <span style={{color: "#000000"}}>
          Rádi přijmeme nové Techniky do našeho Technik Teamu! Níže naleznete
          veškeré důležité informace o této pozici, včetně požadavků a výhod.
          Pokud byste se chtěli stát Technikem, tak nás neváhejte kontaktovat na
          emailové adrese <b>support@qplay.cz</b>.
        </span>
          <li style={{color: "#000000"}}>
            Do e-mailu uveďte svoje dosavadní zkušenosti a zároveň přiložte ukázky
            svých prací.
          </li>
          <li style={{color: "#000000"}}>
            V případě, že bychom Vás vybrali, tak Vás do 14 dní kontaktujeme na
            Vaši e-mailovou adresu.
          </li>
          <ul></ul>
          <h4><span style={{color: "#000000"}}>Co požadujeme?</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Základní znalosti programování (programovací jazyk Java, Kotlin
            nebo JavaScript výhodou).
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Znalost objektově orientovaného programování.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Umět využívat základní znalosti matematiky.
          </span>
          </li>
          <ul></ul>
          <h4><span style={{color: "#000000"}}>Co nabízíme?</span></h4>
          <li>
          <span style={{color: "#000000"}}>
            Možnost práce na velkém množství různých projektů, které uvidí
            tisíce uživatelů denně.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Možnost osobního i profesního rozvoje.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Získání zkušeností s prací v teamu, s verzovacími nástroji (git),
            prohloubení vědomostí v oblasti programování.
          </span>
          </li>
          <li>
            <span style={{color: "#000000"}}>Veškeré VIP výhody.</span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            V závislosti na odvedené práci hmotný balíček.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Po rozhodnutí vedení serveru finanční odměnu.
          </span>
          </li>
          <li>
          <span style={{color: "#000000"}}>
            Možnost 1x měsíčně uspořádat na našem Discordu vlastní akci.
          </span>
          </li>
        </div>
      </section>
    </div>
  )
}