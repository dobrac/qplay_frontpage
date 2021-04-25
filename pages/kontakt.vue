<template>
  <div>
    <section class="wrapper style1">
      <div class="container">
        <div class="support-container">
          <h2 style="margin: 0px">Podpora</h2>
          <a href="https://info.qplay.cz" target="_blank" style="">
            <h3>info.qplay.cz (informační portál, ticket systém)</h3>
          </a>
          V případě, že byste potřebovali s čímkoliv pomoci, nebo se chtěli na
          něco zeptat, tak nás můžete skrz daný odkaz výše kdykoliv kontaktovat.
          Jedná se o podporu, kam se přihlásíte se svými přihlašovacími údaji a
          následně v záložce "Mé tickety" skrz volbu "Vytvořit nový ticket" si
          můžete vytvořit tzv. "ticket", kde bude probíhat písemná konverzace s
          podporou. Součástí vytváření ticketu je i zvolení typu ticketu, zvolte
          takový typ ticketu, který je Vašemu problému nejbližší.<br />
        </div>
        <br />
        <b>Další možnosti kontaktování</b><br />
        V případě nefunkčnosti info panelu nás můžete kontaktovat na emailové
        adrese <b>support@qplay.cz</b>. Například na dotazy ohledně žádostí o
        unban či problémů s platbou v případě funkčního info panelu nemusí být
        na tomto emailu odpovídáno, pro tento druh dotazů prosím využijte
        informační portál
        <a href="https://info.qplay.cz" target="_blank" style="">
          (info.qplay.cz)</a
        >. Pokud máte problém s přístupem do informačního portálu, tak si
        ideálně založte nový účet na
        <a href="https://registrace.qplay.cz" target="_blank">
          registrace.qplay.cz</a
        >
        a skrz ten nás následně na info panelu kontaktujte. Doporučujeme i před
        samotném kontaktování jakékoliv podpory si nejdříve přečíst naší sekci
        FAQ, kde se nachází většina odpovědí na otázky hráčů (<a href="/faq">
          FAQ </a
        >).<br /><br /><br />
        <b> Instagram: </b>
        <a href="https://www.instagram.com/qplaycz/" target="_blank">
          <b>@qplaycz</b>
        </a>
        <br /><br />
        <b> Facebook: </b>
        <a href="https://www.facebook.com/QPlay.cz" target="_blank">
          <b>https://www.facebook.com/QPlay.cz</b>
        </a>
        <br /><br />
        <b> Discord: </b>
        <a href="https://discord.qplay.cz" target="_blank">
          <b>https://discord.qplay.cz</b>
        </a>
        <br /><br />
        <b> TeamSpeak3: </b>
        ts3.qplay.cz

        <br /><br /><br /><br />
        <div v-if="!novyProvozovatel">
          <b>Provozovatel: </b>
          <br />
          net-inout s.r.o.<br />
          IČO: 066 21 236<br />
          DIČ: CZ06621236 (jsme plátci DPH)<br />
          <i>vedená u Krajského soudu v Plzni, oddíl C, vložka 35452</i><br />
          sídlo: Polní 525, 332 09 Štěnovice, Česká republika<br />
          Web:
          <a
            href="https://net-inout.cz"
            target="_blank"
            style="border-bottom: 0px; color: inherit"
          >
            https://net-inout.cz
          </a>
        </div>
        <div v-else>
          <b>Provozovatel: </b>
          <br />
          QPlay Network s.r.o.<br />
          IČO: 090 72 349<br />
          DIČ: CZ09072349 (jsme plátci DPH)<br />
          <i>vedená u Krajského soudu v Plzni, oddíl C, vložka 39201</i><br />
          sídlo: Hodonínská 63, 323 00 Plzeň, Česká republika<br />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novyProvozovatel: true,
    }
  },
  created() {
    this.novyProvozovatel = Date.now() >= new Date(1593554400000)
  },
}
</script>

<style scoped>
.support-container {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
}
</style>
