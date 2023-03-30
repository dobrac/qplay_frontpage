import Head from "next/head"
import Link from "next/link"
import Banner from "../components/Banner";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Kontakt | QPlay.cz</title>
        <meta name="description" content="Kontakt na podporu/vedení serveru QPlay.cz."/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Kontakt</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <div className="support-container">
            <h2 style={{margin: "0px"}}>Podpora</h2>
            <a href="https://info.qplay.cz" target="_blank" rel="noreferrer">
              <h3>info.qplay.cz (informační portál, ticket systém)</h3>
            </a>
            V případě, že byste potřebovali s čímkoliv pomoci, nebo se chtěli na
            něco zeptat, tak nás můžete skrz daný odkaz výše kdykoliv kontaktovat.
            Jedná se o podporu, kam se přihlásíte se svými přihlašovacími údaji a
            následně v záložce &quot;Mé tickety&quot; skrz volbu &quot;Vytvořit nový ticket&quot; si
            můžete vytvořit tzv. &quot;ticket&quot;, kde bude probíhat písemná konverzace s
            podporou. Součástí vytváření ticketu je i zvolení typu ticketu, zvolte
            takový typ ticketu, který je Vašemu problému nejbližší.<br/>
          </div>
          <br/>
          <b>Další možnosti kontaktování</b><br/>
          V případě nefunkčnosti info panelu nás můžete kontaktovat na emailové
          adrese <b>support@qplay.cz</b>. Například na dotazy ohledně žádostí o
          unban či problémů s platbou v případě funkčního info panelu nemusí být
          na tomto emailu odpovídáno, pro tento druh dotazů prosím využijte
          informační portál{" "}
          <a href="https://info.qplay.cz" target="_blank" rel="noreferrer">
            (info.qplay.cz)</a
          >. Pokud máte problém s přístupem do informačního portálu, tak si
          ideálně založte nový účet na{" "}
          <a href="https://registrace.qplay.cz" target="_blank" rel="noreferrer">
            registrace.qplay.cz
          </a>{" "}
          a skrz ten nás následně na info panelu kontaktujte. Doporučujeme i před
          samotným kontaktováním jakékoliv podpory si nejdříve přečíst naší sekci
          FAQ, kde se nachází většina odpovědí na otázky hráčů (
          <Link href="/faq" passHref>
            FAQ
          </Link>
          ).<br/><br/><br/>
          <b> Instagram: </b>
          <a href="https://www.instagram.com/qplaycz/" target="_blank" rel="noreferrer">
            <b>@qplaycz</b>
          </a>
          <br/><br/>
          <b> Discord: </b>
          <a href="https://discord.qplay.cz" target="_blank" rel="noreferrer">
            <b>https://discord.qplay.cz</b>
          </a>
          <br/><br/>
          <b> TeamSpeak3: </b>
          ts3.qplay.cz

          <br/><br/><br/><br/>
          <div>
            <b>Provozovatel: </b>
            <br/>
            QPlay Network s.r.o.<br/>
            IČO: 090 72 349<br/>
            DIČ: CZ09072349 (jsme plátci DPH)<br/>
            <i>vedená u Krajského soudu v Plzni, oddíl C, vložka 39201</i><br/>
            sídlo: Hodonínská 63, 323 00 Plzeň, Česká republika<br/>
          </div>
        </div>
      </section>
    </div>
  )
}