<template>
  <div>
    <section class="wrapper style1">
      <div id="test" class="container">
        <h2 style="text-align: center;">
          FAQ - často kladené otázky
        </h2>

        <div v-for="(q, index) in questions" :key="index">
          <a :href="'#' + q.question">
            <span style="font-weight: bold">{{ q.question }}</span>
          </a>
        </div>

        <br />
        <hr />
        <br />

        <div v-for="(q, index) in questions" :key="index">
          <a :name="q.question"></a>
          <span style="font-weight: bold">{{ q.question }}</span>
          <br />
          <span v-html="q.answer"></span>
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
          'Na server se můžeš připojit s verzemi 1.8.x, 1.9.x, 1.10.x, 1.11.x a 1.12.x.'
        ),
        new Question(
          'Mohu na serveru používat módy?',
          'Ano, můžeš, ale pouze námi vybrané: DamageIndicator, MiniMap, StatusArmor, StatusEffect, Optifine.'
        ),
        new Question(
          'Jak mohu nahlásit nějaký problém/návrh/dotaz?',
          'Stačí, aby jsi se přihlásil se svými herními údaji na stránku <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, kde rozklikneš sekci "Mé tickety" a vytvoříš nový ticket s jakoukoliv otázkou či informací. Zodpovězeno ti bude nejpozději následující den (pokud jsi odeslal ticket Vedení serveru, může to trvat i déle).'
        ),
        new Question(
          'Potřebuji získat unban, obdržel jsem ban neprávem, co mám dělat?',
          'Na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> vytvoříš typ ticketu "Žádost o Unban", kde o unban zažádáš. Zodpovězeno ti bude nejpozději následující den.'
        ),
        new Question(
          'Kde si mohu změnit heslo nebo jméno?',
          'Heslo si můžeš změnit na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, tam se přihlásíš se svými herními údaji a v sekci "Změnit heslo" změnu provedeš. Jméno si můžeš změnit na serveru (ip: premium.qplay.cz).'
        ),
        new Question(
          'Kde zjistím základní údaje o svém herním účtu?',
          'Základní údaje o svém účtu zjistíš na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a>, můžeš tam zjistit statistiky, první a poslední přihlášení, svou IP adresu, expiraci svého VIP účtu a další potřebné informace.'
        ),
        new Question(
          'Jak si mohu převést coiny na jiný účet?',
          'Coiny si můžeš přeposlat příkazem /coins convert jménohráče částka (50% daň). Nabízíme i migraci celého účtu/změnu jména (coiny, statistiky, VIP, kity). Více nalezneš na <a href="https://qplay.cz/navod/overeni-originalky" target="_blank">Změna jména</a>.'
        ),
        new Question(
          'Chci se stát člen A-Teamu, jak toho mohu docílit?',
          'Záleží, jakou pozici chceš vykonávat. Nábory na pozici Helper (podmínka 13+ let) bývají jednou za dva měsíce formou formuláře a jsou vždy vyvěšeny na <a href="https://www.facebook.com/QPlay.cz" target="_blank">Facebook QPlay.cz</a>. Pokud jsi ještě neoslavil 13. narozeniny, můžeš se stát Helperem pouze tak, že si tě osloví sám člen Vedení A-Teamu nebo napíšeš ticket na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> s žádostí o osobní pohovor. Chceš-li se stát builderem, musíš si napsat ticket na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> s žádostí o osobní pohovor.'
        ),
        new Question(
          'Jakým způsobem mohu podpořit server?',
          'Server můžeš podpořit koupí jakéhokoliv VIP účtu, více informací o VIP účtech nalezneš na <a href="https://qplay.cz/vip" target="_blank">Jak si koupit VIP?</a>.'
        ),
        new Question(
          'Chci zažádat o unban na serveru, avšak na TS mám též ban, co mám dělat?',
          'První si musíš vyřešit unban na TS a poté zažádat o unban na serveru. Pokud unban na TS neobdržíš, nemáš žádnou jinou šanci, jak unban na serveru získat.'
        ),
        new Question(
          'Jak se mohu stát YouTuberem?',
          'Můžeš nám poslat žádost o YouTubera pomocí ticketu na stránce <a href="https://info.qplay.cz/" target="_blank">info.qplay.cz</a> nebo ti může samotné Vedení serveru předložit nabídku. Více informací o YT nalezneš na <a href="https://qplay.cz/yt" target="_blank">YouTuber</a>'
        ),
        new Question(
          'Jaké výhody získám s Permanentním VIP (PVIP)?',
          'Permanentní VIP vlastní veškeré výhody jako Medium VIP. Každý měsíc také obdrží stejný počet coinů jako Medium VIP.'
        ),
        new Question(
          'Jak se připojím na TS3?',
          'Zaprvé si musíš TS3 stáhnout (www.teamspeak.com/downloads). Po instalaci stačí v horní liště "Connections" vyplnit své herní jméno a IP adresu: ts3.qplay.cz a kliknout na "Connect".'
        ),
        new Question(
          'Někdo je za mě již zaregistrovaný, co mám dělat?',
          'Stačí postupovat podle návodu na <a href="https://qplay.cz/navod/overeni-originalky" target="_blank">Ověření originálky</a>. Zde zadáš, že neznáš heslo a vytvoří se ti nový účet na kterém budeš moct již hrát.'
        )
      ]
    }
  }
}
</script>
