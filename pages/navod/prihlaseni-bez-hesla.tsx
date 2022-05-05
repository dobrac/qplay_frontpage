import Head from "next/head"

export default function LoginWithoutPassword() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | Přihlášení bez hesla</title>
        <meta name="description" content="Podrobný návod jak na se na našem serveru přihlašovat bez hesla." />
      </Head>
      <section className="banner sm">
        <div className="pagename">
            <h1>Přihlášení bez hesla</h1>
        </div>
      </section>
      <section className="pagecontent">
        <div className="container">
          Máš originální Minecraft a nebaví tě se furt na serveru přihlašovat?
          Vidíš u ostatních hráčů, že mají skin, ale ty ho nemáš? Tak postupuj
          podle tohoto krátkého návodu a aktivuj si tyto výhody i ty! <br/>
          <br/>
          <ol style={{listStyleType: "decimal"}}>
            <li>
              Přihlaš se na stránce{" "}
              <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">
                https://info.qplay.cz
              </a>
            </li>
            <li>
              Na stránce &quot;Domů&quot; najdi položku &quot;Přihlášení na serveru bez hesla&quot;
            </li>
            <li>Klikni na tlačítko &quot;Zapnout&quot;</li>
            <li>Připoj se na server :)</li>
          </ol>
        </div>
      </section>
    </div>
  )
}