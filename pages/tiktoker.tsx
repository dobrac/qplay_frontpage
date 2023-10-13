import Head from 'next/head'
import Banner from "../components/Banner";
import Link from 'next/link';

export default function Tiktoker() {
  return (
    <div>
      <Head>
        <title>Tiktoker | QPlay.cz</title>
        <meta name="description" content="Podrobný návod jak na našem serveru získat pozici TikToker."/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>TikToker</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <p style={{textAlign: "center"}}>
            Níže naleznete podmínky a výhody skupiny TikToker. V případě, že
            podmínky splňujete, tak nás můžete kontaktovat na{" "}
            <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">info.qplay.cz</a>{" "}
            vytvořením ticketu s typem &quot;Chci být TikToker&quot;. O&nbsp;konečném
            udělení skupiny TikToker rozhoduje vedení serveru.
          </p>
          <br/>
          <div
            style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}
          >
            <div>
              <h2>
                Podmínky pro prefix <span style={{color: "#FF1493"}}>TikToker</span>
              </h2>

              <p>- TikTok kanál musí mít více než 500 sledujících.</p>

              <p>- Na každém videu z našeho serveru musí být alespoň 1 000 zhlédnutí.</p>

              <p>- Na TikTok kanále se musí vyskytovat alespoň 3 videa z našeho serveru.</p>

              <p>- TikToker se musí snažit aktivně vydávat každý měsíc alespoň 2 videa z našeho serveru.</p>
              
              <p>- Slušně reprezentovat náš server.</p>

              <p>- Dodržovat pravidla našeho serveru.</p>
              <br/>
              <h2>
                Výhody <span style={{color: "#FF1493"}}>TikTokera</span> na serveru:
              </h2>

              <p>1) Prefix TikToker na Minecraft serveru.</p>

              <p>2) Má aktivované všechny VIP výhody.</p>

              <p>3) Všechny kity má zadarmo.</p>

              <p>4) Má možnost využít /nick (natáčení videí za skryté jméno).</p>

              <p>5) Může využít možnosti pořádat soutěže s naším serverem.</p>

              <p>6) Jeho kanál je zveřejněn na stránce <Link href={"/nas-tym"} passHref>„Náš Tým“</Link>.</p>

              <p>7) Skupina TikToker na <a href="https://discord.qplay.cz" target="_blank" rel="noreferrer">Discord
                serveru</a> (lze o ni
                požádat v <a href="https://info.qplay.cz/tickets/new" target="_blank" rel="noreferrer">ticketu</a> s
                typem
                &quot;Jiné&quot;).</p>

              <br/>

              <i>
                * Vyhrazujeme si právo na odebrání{" "}
                <span style={{color: "#FF1493"}}>TikTokera</span> bez udání důvodu.
              </i>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
