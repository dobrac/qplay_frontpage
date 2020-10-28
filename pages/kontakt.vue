<template>
  <div>
    <section class="wrapper style1">
      <div class="container">
        <div class="support-container">
          <h2 style="margin: 0px">Podpora</h2>
          <a href="https://info.qplay.cz" target="_blank" style="">
            <h3>info.qplay.cz (informační portál, ticket systém)</h3>
          </a>
          Pokud jste dostal ban a myslíte, že neprávem, vytvořte ticket v
          systému info.qplay.cz. Náš team se na to podívá v co nejkratším možném
          termínu. Pokud máte problém s odesláním sms, ztratil se Vám nebo Vám
          nepřišel aktivační kód, či máte jiný problém s VIP, prosíme,
          kontaktujte nás na info.qplay.cz (odkaz výše)<br />
        </div>

        <br />
        <b>Další možnosti kontaktování</b><br />
        V případě jiných dotazů, návrhu spolupráce atd. nás můžete kontaktovat
        na emailové adrese <b>support@qplay.cz</b>. Na dotazy ohledně žádostí o
        unban či problémů s platbou nemusí být na tomto emailu odpovídáno, pro
        tento druh dotazů prosím využijte informační portál. Pokud máte problém
        s přístupem do informačního portálu, můžete nás samozřejmě kontaktovat
        na této emailové adrese. Nicméně doporučujeme si nejdříve přečíst naší
        sekci FAQ, kde se nachází většina odpovědí na otázky hráčů (
        <a href="/faq"> FAQ </a>).

        <br /><br /><br />
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
          <i>vedená u Krajského soudu v Plzni, oddíl C, vložka 39201</i><br />
          sídlo: Hodonínská 63, 323 00 Plzeň, Česká republika<br />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.support-container {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
}
</style>

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
