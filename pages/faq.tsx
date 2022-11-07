import Head from "next/head"
import Banner from "../components/Banner";

class Question {
  question: string
  answer: string

  constructor(question: string, answer: string) {
    this.question = question
    this.answer = answer
  }
}


const questions = [
  new Question(
    'S jakou verzí Minecraftu se připojím na server?',
    'Na server se můžeš připojit s verzí 1.8. a vyšší.'
  ),
  new Question(
    'Jaké módy na serveru mohu používat?',
    '1) Veškeré estetické modifikace (například shadery, jas) <i>[blinking skin mód je na serveru zakázán]</i><br/>2) Veškeré modifikace, které hráče informují, nebo něco indikují (například status brnění, status efektů, minimapa, damage indicator)<br/>3) Módy zlepšující výkon hry nebo zlepšující připojení k serveru (například módy zlepšující FPS)<br/><i>Veškeré módy jsou používány na vlastní nebezpečí.</i>'
  ),
  new Question(
    'Jak mohu nahlásit nějaký problém/návrh/dotaz?',
    'Stačí, aby ses přihlásil se svými herními údaji na stránku <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, kde rozklikneš sekci "Mé tickety" a vytvoříš nový ticket s jakoukoliv otázkou či informací. Zodpovězeno ti bude nejpozději následující den (pokud jsi odeslal ticket Vedení serveru, může to trvat i déle).'
  ),
  new Question(
    'Potřebuji získat unban, obdržel jsem ban neprávem, co mám dělat?',
    'Na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> vytvoříš typ ticketu "Žádost o Unban", kde o unban zažádáš. Zodpovězeno ti bude nejpozději následující den.'
  ),
  new Question(
    'Kde si mohu změnit heslo nebo jméno?',
    'Heslo si můžeš změnit na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, tam se přihlásíš se svými herními údaji a v sekci "Změnit heslo" změnu provedeš. Jméno si můžeš změnit na stejné stránce v sekci "Změna nicku".'
  ),
  new Question(
    'Kde zjistím základní údaje o svém herním účtu?',
    'Základní údaje o svém účtu zjistíš na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, můžeš tam zjistit statistiky, první a poslední přihlášení, svou IP adresu, expiraci svého VIP účtu a další potřebné informace.'
  ),
  new Question(
    'Jak si mohu převést coiny na jiný účet?',
    'Coiny si můžeš přeposlat příkazem /coins convert jménohráče částka (50% daň, v případě VIP je daň nižší). Na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> nabízíme i migraci celého účtu/změnu jména (coiny, statistiky, VIP atd.).'
  ),
  new Question(
    'Chci se stát členem A-Teamu, jak toho mohu docílit?',
    'Záleží, jakou pozici chceš vykonávat. Nábory na pozici Helper bývají jednou za tři měsíce formou formuláře a jsou vždy vyvěšeny na <a href="https://www.facebook.com/QPlay.cz" target="_blank">Facebooku QPlay.cz</a> nebo <a href="https://instagram.com/qplaycz/" target="_blank">Instagramu QPlay.cz</a>. Chceš-li se stát builderem, musíš si napsat ticket na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> s žádostí o osobní pohovor.'
  ),
  new Question(
    'Jakým způsobem mohu podpořit server?',
    'Server můžeš podpořit koupí jakéhokoliv VIP účtu, více informací o VIP účtech nalezneš na <a href="https://qplay.cz/vip" target="_blank">Jak si koupit VIP?</a>.'
  ),
  new Question(
    'Jak se mohu stát YouTuberem?',
    'Můžeš nám poslat žádost o YouTubera pomocí ticketu na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> nebo ti může samotné Vedení serveru předložit nabídku. Více informací o YT nalezneš na <a href="https://qplay.cz/yt" target="_blank">YouTuber</a>'
  ),
  new Question(
    'Jaké výhody získám s Permanentním VIP (PVIP)?',
    'Permanentní VIP vlastní veškeré výhody jako Medium VIP, kromě týdenních odměn, které má oddělené. Každý týden si může vyzvednout 4 000 coinů u Rewards postavičky, která se nachází na hlavním lobby.'
  ),
  new Question(
    'Jak se připojím na Discord?',
    'Na náš Discord server se připojíš skrz pozvánku, která se nachází na <a href="https://discord.qplay.cz" target="_blank">discord.qplay.cz</a>.'
  ),
  new Question(
    'Jak se připojím na TS3?',
    'Zaprvé si musíš TS3 stáhnout (<a href="https://www.teamspeak.com/en/downloads/" target="_blank">www.teamspeak.com/downloads</a>). Po instalaci stačí v horní liště "Connections" vyplnit své herní jméno a IP adresu: ts3.qplay.cz a kliknout na "Connect".'
  ),
  new Question(
    'Někdo je za mě již zaregistrovaný, co mám dělat?',
    'Stačí si zaregistrovat účet na <a href="https://registrace.qplay.cz" target="_blank">https://registrace.qplay.cz</a> (kolonku "Nick" můžeš nechat prázdnou) a následně postupovat podle návodu na <a href="https://qplay.cz/navod/privlastneni-nicku" target="_blank">Můj nick je již zaregistrovaný</a>.'
  ),
  new Question(
    'Zapomněl jsem heslo, jak si ho mohu resetovat?',
    'Resetování hesla lze provést na stránce <a href="https://heslo.qplay.cz" target="_blank">heslo.qplay.cz</a>. Pro resetování bude potřeba, abys zadal e-mail, který máš přiřazený k účtu. Pokud e-mail přiřazený nemáš, tak je resetování většinou nemožné, můžeš si ale zaregistrovat nový účet a kontaktovat nás na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, je možné, že ti i přesto heslo dokážeme resetovat.'
  ),
  new Question(
    'Jak lze ze serveru nahlásit cheatera?',
    'Hráče za cheaty můžete jednoduše zadarmo nahlásit pomocí příkazu <b>/report nick</b> a následně v inventáři stačí <b>zvolit nahlášení cheatera</b> (item železného meče). Členi QPlay teamu poté prověřují hráče s co nejvíce nahlášeními (pokud tedy chcete, aby byl daný cheater potrestán co nejdříve, tak je třeba, aby jej nahlásilo co nejvíce hráčů). V případě, že díky vašemu reportu bude cheater potrestán, tak se vám v chatu zobrazí zpráva, že byl daný hráč zabanován.' +
    '<br /><b><span style="color: #403C3C;">[</span><span style="color: #f64141;">Report</span><span style="color: #403C3C;">]</span>&nbsp;<span style="color: #545454;">Your report on player</span>&nbsp;<span style="color: #EF9000;">Tester </span><span style="color: #545454;">has been successfully solved. The cheater has been banned.</span></b><br />' +
    '<br />Z důvodu větší efektivity je naší prioritou hlavně blokovat cheatery, co zrovna v dané chvíli cheaty používají, proto se vámi vytvořený report po 10 minutách skrývá, pokud ale i po 10 minutách váš report nebyl vyřešen zabanováním cheatera a cheater stále cheaty používá, tak váš report můžete obnovit opětovným nahlášením. Tímto omezením chceme docílit toho, že budeme pomáhat hlavně hráčům, na jejichž aréně v dané chvíli cheater cheaty používá.<br /><br />' +
    'Pro nahlášení cheaterů využívejte výhradně tento report systém.'
  ),
]

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>QPlay.cz | FAQ</title>
        <meta name="description" content="Často kladené otázky na náš server." />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
            <h1>FAQ</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          <h2 style={{textAlign: "center"}}>FAQ - často kladené otázky</h2>
          <br/><br/>

          {questions.map(q => {
            return (
              <div key={q.question}>
                <a href={'#' + q.question}>
                  <span style={{fontWeight: "bold"}}>{q.question}</span>
                </a>
              </div>
            )
          })}

          <br/>
          <hr/>
          <br/>

          {questions.map(q => {
            return (
              <div key={q.question}>
                <a className={q.question}/>
                <span style={{fontWeight: "bold"}}>{q.question}</span>
                <br/>
                <span dangerouslySetInnerHTML={{__html: q.answer}}/>
                <br/>
                <br/>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
