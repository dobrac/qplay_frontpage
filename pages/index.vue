<template>
  <div>
    <!-- Banner -->
    <nuxt-link to="/vip">
      <section class="banner zoomBanner">&nbsp;</section>
    </nuxt-link>
    <section class="banner" style="background-image: none; height: inherit;">
      <header class="external" style="position: relative;">
        <a href="https://info.qplay.cz/" target="_blank" class="button">
          Přihlášení do Info Panelu
        </a>
      </header>
    </section>
    <!-- Gigantic Heading -->
    <section class="wrapper style2">
      <div class="container">
        <header class="major">
          <h2>mc.qplay.cz</h2>
          <p>Online Players: {{ playersShow }}/1400</p>
        </header>
      </div>
    </section>
    <!-- CTA -->
    <section id="cta" class="wrapper style3">
      <div class="container">
        <header>
          <h2>Chceš se také připojit?</h2>
          <a href="/jak-se-pripojit" class="button">Klikni zde</a>
        </header>
      </div>
    </section>

    <!-- Highlights -->
    <section class="wrapper style1">
      <div class="container">
        <div class="row 200%">
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/coalblock.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>MiniAnnihilation</h3>
              <p>
                Natěž si suroviny, ze kterých si vytvoříš své brnění a nástroje.
                Ovládni střed mapy, aby jsi získal i diamantové věci. Poté znič
                nexus ostatním týmům.
              </p>
            </div>
          </section>
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/ender_pearl.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>SkyWars</h3>
              <p>
                Posbírej z truhel na ostrovech ty nejlepší věci pro boj a zabij
                všechny nepřátele.
              </p>
            </div>
          </section>
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/minecraft_golden_apple.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>MiniUHC</h3>
              <p>
                Natěž si ve volné přírodě co nejlepší suroviny a zabij všechny
                nepřátele.
              </p>
            </div>
          </section>
        </div>
        <div class="row 200%">
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/1vs1.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>1vs1</h3>
              <p>
                Myslíš si, že jsi výborný zabiják? Dokaž to! Vyzvi svého
                kamaráda nebo náhodného hráče na souboj a zab ho.
              </p>
            </div>
          </section>
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/bed.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>BedWars</h3>
              <p>
                Nasbírej na svém ostrově co nejvíce ingotů (bronze, iron, gold),
                zakup si věci u vesničana a znič postel ostatním týmům.
              </p>
            </div>
          </section>
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/crystals.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>Crystals</h3>
              <p>
                Natěž si na svém ostrově suroviny, zakup si u vesničana
                speciální předměty a připrav se k boji. Jakmile budeš připraven,
                znič srdce ostatním týmům.
              </p>
            </div>
          </section>
        </div>
        <div class="row 200%">
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/gold_ingot.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>GoldRush</h3>
              <p>
                Nakup si za získané levely věci k boji a získej od pig-zombie
                pro svůj tým co nejvíce zlatých cihel.
              </p>
            </div>
          </section>
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/nether_star.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>MicroBattle</h3>
              <p>
                Chop se zbraně se svým spoluhráčem a vyzabíjej na mapě všechny
                nepřátele.
              </p>
            </div>
          </section>
          <section class="4u 12u(narrower)">
            <div class="box highlight">
              <i
                STYLE="background-image: url(icons/blue_wool.png);background-size: contain; background-repeat: no-repeat;"
                class="icon major"
              />
              <h3>Colors</h3>
              <p>
                Běhej po mapě a obarvi svou barvou týmu co nejvíce bloků. Dej si
                pozor, aby ti bloky nepřebarvil jiný hráč.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: -1,
      timer: null,
    }
  },
  computed: {
    playersShow() {
      return this.players > -1 ? this.players : '---'
    },
  },
  mounted() {
    this.fetchPlayers()
    this.timer = setInterval(this.fetchPlayers, 5000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    async fetchPlayers() {
      const data = await this.$axios.$get(
        'https://info.qplay.cz/playersCount.aspx'
      )
      if (data) {
        this.players = data
      }
    },
  },
}
</script>
