<template>
  <div>
    <section class="wrapper style1" style="padding: 2em 0 1em 0">
      <div id="test" class="container">
        <!--center>
          <a href="#darkovyPoukaz" style="text-decoration:none;border:none;"
            ><img src="/images/BannerPNGFinal.png" style="max-width:100%"/></a
          ><br />
          <br />
        </center>-->
        <!--
  <center>
          <a href="#naramekAkce" style="text-decoration:none;border:none;"><img src="images/WebNaramkyAkce.png?ver=2" ></a><br> <br><br>
  </center>      -->

        <center>
          <a href="https://kod.qplay.cz/">
            <input
              id="aktivovatVIP"
              type="submit"
              name="submit"
              value="AKTIVOVAT VIP KÓD"
            />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#zakoupeniVIP">
            <input
              id="souhlasPort"
              type="submit"
              name="submit"
              value="Zakoupit VIP"
            />
          </a>
        </center>
        <br />
        <!--<header>
          <center>
            <h2>Jak si koupit VIP?</h2>
          </center>
        </header>-->
        <!--<h2><b><center><font color=indianred>Speciální VÁNOČNÍ Crate pro všechna VIP!</font></b></center></h2>
        <h2><b><center><font color=firebrick>SILVESTROVSKÁ AKCE: Ke všem VIP + 1 Crate!</font></b></center></h2>
        <h2>
          <center>
            <font color="orange" style="font-weight: bold;">
              Speciální HALLOWEEN Crate pro všechna VIP!
            </font>
          </center>
        </h2>-->
        <!-- <h2>
          <center>
            <font color="indianred" style="font-weight: bold;">
              Pololetní akce na všechna VIP!
            </font>
          </center>
        </h2> -->
        <!-- <h2>
          <center>
            <font color="indianred" style="font-weight: bold;">
              Speciální CHRISTMAS Crate pro všechna VIP!
            </font>
          </center>
        </h2> -->
        <!--<h2>
          <center>
            <font color="#e75480" style="font-weight: bold;">
              Valentýnská akce na všechna VIP!
            </font>
          </center>
        </h2>-->
        <!-- <h2>
          <center>
            <font color="#2AC820" style="font-weight: bold;">
              Velikonoční akce na všechna VIP!
            </font>
          </center>
        </h2> -->

        <VIPTable></VIPTable>
        <a name="zakoupeniVIP" style="position: relative; top: -50vh"></a>

        <br />

        <p>
          *Crate Shards je nová měna, kterou vlastní pouze hráč s LEGEND VIP.
          Získává se místo Coinů hraním miniher. Na Lobby v Crate Factory si lze
          následně Crate Shards proměnit na normální crates (BASIC, MYSTERY,
          LEGEND) a v sezónách i na například Christmas, Valentine, Halloween
          crate.
        </p>

        <div>
          <h2>Jak aktivovat VIP kód?</h2>
          <p>
            Od 4.12.2017 přecházíme na nový systém aktivace VIP účtů. Zakoupíte
            si tzv. KÓD K AKTIVOVÁNÍ VIP ÚČTU - pomocí sms, PayPalu či PSC a ve
            zpětné sms obdržíte 8 místný kód ve tvaru XXXX-XXXX. Po jeho
            obdržení doporučujeme navštívit stránku
            <a href="https://kod.qplay.cz">https://kod.qplay.cz</a>, kam kód
            zadáte a máte možnost jej aktivovat na serveru či přímo přes
            internet. Dále je také možnost vygenerovat
            <b
              >dárkovou poukázku - ideální dárek pro Vaše kamarády či rodinu.</b
            >
          </p>

          <div>
            <b>Postup:</b><br />
            1) Zakoupíte si KÓD - standardním způsobem - SMS, PSC, PayPal<br />
            2) Po obdržení kódu (XXXX-XXXX) přejdete na stránku
            <a href="https://kod.qplay.cz">https://kod.qplay.cz</a>, kam kód
            zadáte<br />
            3) Zvolíte možnost aktivace<br />
            4) Počkáte cca 5 minut a Vaše VIP výhody by měly být aktivní!<br />
          </div>
          <br />
          <div>
            Případně můžete aktivovat kód na serveru příkazem na Lobby:
            <b>/kod [VAS_KOD]</b> - takže například /kod 1234-5678
          </div>
          <br />
          <p>
            Při současně aktivovaných více druhů VIP zároveň se nejprve aktivuje
            to nejlepší a poté se postupně aktivují sestupně od nejlepších po
            nejhorší. Při zakoupení více VIP stejného typu se doby expirace
            prodlužují.
          </p>
        </div>

        <div>
          <a name="darkovyPoukaz" />
          <h2>Zakoupení dárkového poukazu na VIP</h2>
          <p>
            Sháníte dárek pro svého kamaráda, kamarádku, syna, dceru…? Dárkový
            poukaz na PREMIUM účet na herním serveru QPlay.cz jistě nebude
            špatná volba.<br />
            <br />
            <b>Jak to funguje?</b> <br />
            Vyberte si jednu z možností platby: SMS, PayPal či PaySafeCard a
            postupujte dle pokynů uvedených na této stránce. Po úspěšném
            zaplacení Vám přijde sms (v případě platby pomocí sms) nebo email (v
            případě platby pomocí PSC nebo PayPal) s kódem. Tento kód zadejte na
            stránce
            <a href="https://kod.qplay.cz" target="_blank">
              https://kod.qplay.cz
            </a>
            a zvolte možnost vygenerovat dárkový poukaz. Tento vygenerovaný
            dárkový poukaz je možné vytisknout a je platný ihned po
            zaplacení.<br /><br />
            V případě jakýchkoliv dotazů se na nás neváhejte obrátit – jak se
            dozvíte v sekci Kontakt.
          </p>

          <div>
            Další informace k VIP platbě, <em>reklamace</em> atd. můžete řešit
            pomocí ticketu na
            <a href="https://info.qplay.cz"><strong>info.qplay.cz</strong></a>
            , případně napište na email: <strong>support@qplay.cz</strong>,
            Děkujeme
          </div>
        </div>

        <div style="margin-top: 2em">
          <h2>Máte problém s VIP?</h2>
          <ol style="list-style: decimal; list-style-position: inside">
            <li>VIP se vám na serveru aktivuje obvykle do 5 minut</li>
            <li>
              Pokud VIP i po hodině od odeslání SMS nemáte, zkontrolujte si text
              a číslo SMS, kterou jste odeslal/a a zda vám byla doručena
              potvrzovací zpráva o provedení platby
            </li>
            <li>
              V případě, že neshledáte chybu na své straně, napište ticket na
              <a href="https://info.qplay.cz" style="font-weight: bold"
                >info.qplay.cz</a
              >
              a vše zde s vámi prověříme
            </li>
            <li>
              Odeslání SMS může blokovat nedostatečná výše kreditu či zakázané
              PREMIUM SMS platby, tyto problému musíte vyřešit s vaším
              operátorem
            </li>
            <li>Za špatně zaslanou SMS neneseme žádnou zodpovědnost</li>
          </ol>
        </div>

        <div>
          <h2>Pravidla - VIP</h2>
          <ul style="color: #000000">
            <li>
              VIP bude po zadání kódu aktivováno obvykle do 5 minut. Pokud ani
              po hodině nemáte VIP výhody aktivní, neváhejte se na nás obrátit.
            </li>
            <li>
              VIP neslouží jako obrana vůči banu = v případě porušení Obchodních
              podmínek, Podmínek použití služeb QPlay.cz či pravidel herního
              serveru, může Vám být zakázán přístup na server.
            </li>
            <li>Za špatně odeslanou platbu neneseme žádnou zodpovědnost.</li>
            <li>
              Zakoupením kódu k aktivaci VIP účtu souhlasíte, že rozumíte a
              souhlasíte s Obchodními podmínkami, Podmínkami použití služeb
              QPlay.cz a Pravidly herního serveru QPlay.cz a zavazujete se je
              dodržovat.
            </li>
            <li>
              Zakoupením kódu k aktivaci VIP účtu potvrzujete, že jste byli
              seznámeni s tím, že kupující nemá nárok na odstoupení od kupní
              smlouvy (do 14 dnů), jedná se o dodání digitálního obsahu bez
              hmotného nosiče.
            </li>
            <li>
              Negarantujeme, že po dobu trvání VIP výhod bude umožněn přístup na
              server. V případě, že herní server QPlay.cz nebude dále
              provozován, veškeré VIP účty a neaktivované VIP kódy s okamžitou
              platností zanikají bez nároku na finanční či jinou náhradu.
            </li>
            <li>
              Vyhrazujeme si právo na okamžitou úpravu VIP výhod bez upozornění.
            </li>
          </ul>
        </div>

        <div>
          <h2>GoPay</h2>
          <p>
            GoPay je platební brána, umožňující platbu pomocí PayPal,
            PaySafeCard, bankovním převodem (online i standardním), platební
            kartou...
          </p>
          <div>
            <img
              src="/imgBrana/1.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/2.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/3.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/4.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/5.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/6.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/7.png"
              style="height: 40px; margin-right: 10px"
            /><img
              src="/imgBrana/8.png"
              style="height: 40px; margin-right: 10px"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VIPTable from '@/components/vip/VIPTable'

function VIPCoins(def, sale) {
  return {
    def,
    sale,
  }
}

function VIPMysteryCrates(def, sale) {
  return {
    def,
    sale,
  }
}

export default {
  components: {
    VIPTable,
  },
  data() {
    return {}
  },
  computed: {
    VIPBasic() {
      return {
        name: 'basic',
        coins: VIPCoins(10000, null),
        mysteryCrates: VIPMysteryCrates(1, null),
      }
    },
    VIPMedium() {
      return {
        name: 'medium',
        coins: VIPCoins(25000, null),
        mysteryCrates: VIPMysteryCrates(3, null),
      }
    },
    VIPMaster() {
      return {
        name: 'master',
        coins: VIPCoins(50000, null),
        mysteryCrates: VIPMysteryCrates(6, null),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0px;
}
</style>
