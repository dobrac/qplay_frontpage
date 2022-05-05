import Head from "next/head"
import Link from "next/link"

export default function HowToJoin() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Jak se připojit</title>
        <meta name="description" content="Podrobný návod jak se zaregistovat a připojit na náš server." />
      </Head>
      <section className="banner sm">
        <div className="pagename">
            <h1>Jak se připojit</h1>
        </div>
      </section>
      <section className="pagecontent">
        <div className="container">
          <strong>1)</strong> - Zapněte si Minecraft launcher.<br/>
          <strong>2)</strong> - Připojte se do Minecraftu s verzí 1.8 nebo
          novější.<br/>
          <strong>3)</strong> - Klikněte na tlačítko <em>Multiplayer</em> a poté
          na <em>Add server</em>, kam do pole <em>Server Address</em> vyplňte IP:{" "}
          <b>mc.qplay.cz</b><br/>
          <strong>4)</strong> - Klikněte na tlačítko <em>Done</em>. Po připojení
          se Vám objeví knížka s dalším postupem. Případně můžete využít rovnou
          odkazu{" "}
          <a href="https://registrace.qplay.cz/">https://registrace.qplay.cz</a>
          <br/>
          <strong>5)</strong> - Při dalším příhlášení na server použijte příkaz:{" "}
          <strong>/login vaseheslo</strong> <br/><br/>

          <strong>BONUS</strong> - Pokud vlastníte originální účet, můžete využít
          našeho návodu na ověření:{" "}
          <strong>
            <Link href="/navod/prihlaseni-bez-hesla" passHref>
              <a> KLIKNI </a>
            </Link>
          </strong>
        </div>
      </section>
    </div>
  )
}