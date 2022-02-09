<template>
  <div>
    <div id="page-wrapper">
      <!-- Header -->
      <div id="header">
        <!-- Logo -->
        <h1>
          <a id="logo" href="/">
            <img src="~static/images/logo.png" alt="QPlay" />
          </a>
        </h1>

        <!-- Nav -->
        <nav id="nav">
          <ul>
            <nuxt-link tag="li" to="/" exact>
              <a>Domů</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/jak-se-pripojit">
              <a>Jak se připojit?</a>
            </nuxt-link>
            <li class="external">
              <a href="https://registrace.qplay.cz"> Zaregistrovat se </a>
            </li>
            <nuxt-link tag="li" to="/pravidla">
              <a>Pravidla</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/vip" class="vip">
              <a>VIP účet</a>
            </nuxt-link>
            <li class="vip external">
              <a href="https://store.qplay.cz">Obchod</a>
            </li>
            <li class="external">
              <a href="https://changelog.qplay.cz"> Seznam změn </a>
            </li>
            <nuxt-link tag="li" to="/nabor">
              <a>Pozice</a>
              <ul>
                <nuxt-link tag="li" to="/yt">
                  <a>YouTuber</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/nabor/technik">
                  <a>Technik</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/nabor/helper">
                  <a>Helper</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/nabor/builder">
                  <a>Builder</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/nabor/cheathunter">
                  <a>CheatHunter</a>
                </nuxt-link>
              </ul>
            </nuxt-link>
            <nuxt-link tag="li" to="/navod">
              <a>Nápověda</a>
              <ul>
                <nuxt-link tag="li" to="/faq">
                  <a>FAQ</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/navod/privlastneni-nicku">
                  <a>Můj nick je již zaregistrovaný</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/navod/prihlaseni-bez-hesla">
                  <a>Přihlašování bez hesla/skin na serveru</a>
                </nuxt-link>
                <li class="external">
                  <a href="https://heslo.qplay.cz">Změna hesla</a>
                </li>
                <!--  <li><a href="?page=zmena-jmena">Změna jména</a></li>          -->
              </ul>
            </nuxt-link>
            <nuxt-link tag="li" to="/kontakt">
              <a>Kontakt</a>
            </nuxt-link>
          </ul>
        </nav>
      </div>

      <nuxt />

      <!-- Footer -->
      <div id="footer">
        <!-- Icons -->
        <ul class="icons">
          <li><a href="http://minecraft-server-list.cz" target="_blank" /></li>
        </ul>

        <!-- Copyright -->
        <div class="copyright">
          <ul class="menu">
            <li>&copy; QPlay.cz. Všechna práva vyhrazena</li>
            <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <!-- <script src="/js/jquery.min.js"></script> -->
    <script src="/js/jquery.dropotron.min.js" />
    <script src="/js/skel.min.js" />
    <script src="/js/util.js" />
    <!--[if lte IE 8]><script src="js/ie/respond.min.js"></script><![endif]-->
    <script src="/js/main.js" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
