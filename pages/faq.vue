<template>
  <div>
    <section class="wrapper style1">
      <div id="test" class="container">
        <h2 style="text-align: center">FAQ - často kladené otázky</h2>

        <div v-for="(q, index) in questions" :key="index">
          <a :href="'#' + q.question">
            <span style="font-weight: bold">{{ q.question }}</span>
          </a>
        </div>

        <br />
        <hr />
        <br />

        <div v-for="(q, index) in questions" :key="index">
          <a :name="q.question" />
          <span style="font-weight: bold">{{ q.question }}</span>
          <br />
          <span v-html="q.answer" />
          <br />
          <br />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
class Question {
  constructor(question, answer) {
    this.question = question
    this.answer = answer
  }
}

export default {
  data() {
    return {
      questions: [
        new Question(
          'S jakou verzí Minecraftu se připojím na server?', 
          'Na server se můžeš připojit s verzí 1.8. a vyšší.'
        ),
        new Question(
          'Jaké módy na serveru mohu používat?',
          '<ol>
          <li>Veškeré estetické modifikace (například shadery, jas) <i>[blinking skin mód je na serveru zakázán]</i></li>
          <li>Veškeré modifikace, které hráče informují, nebo něco indikují (například status brnění, status efektů, minimapa, damage indicator)</li>
          <li>Módy zlepšující výkon hry nebo zlepšující připojení k serveru (například módy zlepšující FPS)</li>
          </ol>
          <i>Veškeré módy jsou ale používány na vlastní nebezpečí.</i>'
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
          'Chci se stát člen A-Teamu, jak toho mohu docílit?',
          'Záleží, jakou pozici chceš vykonávat. Nábory na pozici Helper bývají jednou za tři měsíce formou formuláře a jsou vždy vyvěšeny na <a href="https://www.facebook.com/QPlay.cz" target="_blank">Facebook QPlay.cz</a>. Chceš-li se stát builderem, musíš si napsat ticket na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> s žádostí o osobní pohovor.'
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
          'Na náš Discord server se připojíš skrz pozvánku, která se nachází na https://discord.qplay.cz'
        ),
        new Question(
          'Jak se připojím na TS3?',
          'Zaprvé si musíš TS3 stáhnout (www.teamspeak.com/downloads). Po instalaci stačí v horní liště "Connections" vyplnit své herní jméno a IP adresu: ts3.qplay.cz a kliknout na "Connect".'
        ),
        new Question(
          'Někdo je za mě již zaregistrovaný, co mám dělat?',
          'Stačí si zaregistrovat účet pod jakýmkoliv volným nickem a následně postupovat podle návodu na <a href="https://qplay.cz/navod/overeni-originalky" target="_blank">Ověření originálky</a>.'
        ),
        new Question(
          'Zapomněl jsem heslo, jak si ho mohu resetovat?',
          'Resetování hesla lze provést na stránce <a href="https://heslo.qplay.cz" target="_blank">heslo.qplay.cz</a>. Pro resetování bude potřeba, abys zadal e-mail, který máš přiřazený k úču. Pokud e-mail přiřazený nemáš, tak je resetování většinou nemožné, můžeš si ale zaregistrovat nový účet a kontaktovat nás na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, je možné, že ti i přesto heslo dokážeme resetovat.'
        ),
      ],
    }
  },
}
</script>
