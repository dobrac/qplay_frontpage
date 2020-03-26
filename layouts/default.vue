<template>
  <div>
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v6.0&appId=1613903462180236&autoLogAppEvents=1"
    ></script>
    <script src="/js/facebook.js" />
    <div id="fbplikebox" style="display: none;">
      <div class="fbplbadge" />
      <div
        class="fb-page fb-iframe"
        data-href="https://www.facebook.com/QPlay.cz/"
        data-tabs="timeline"
        data-width="320"
        data-height="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/QPlay.cz/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/QPlay.cz/">QPlay.cz</a>
        </blockquote>
      </div>
    </div>

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
              <a href="https://registrace.qplay.cz">
                Zaregistrovat se
              </a>
            </li>
            <nuxt-link tag="li" to="/vip" class="vip">
              <a>Jak si koupit VIP?</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/pravidla">
              <a>Pravidla</a>
            </nuxt-link>
            <li class="external">
              <a href="https://changelog.qplay.cz">
                Seznam změn
              </a>
            </li>
            <nuxt-link tag="li" to="/nabor">
              <a>Nábor</a>
              <ul>
                <nuxt-link tag="li" to="/nabor/helper">
                  <a>Helper</a>
                </nuxt-link>
                <nuxt-link tag="li" to="/nabor/builder">
                  <a>Builder</a>
                </nuxt-link>
              </ul>
            </nuxt-link>
            <nuxt-link tag="li" to="/faq">
              <a>FAQ</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/yt">
              <a>YouTuber</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/navod">
              <a>Návody</a>
              <ul>
                <nuxt-link tag="li" to="/navod/overeni-originalky">
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

<style>
#fbplikebox {
  display: block;
  padding: 0;
  z-index: 99999;
  position: fixed;
}

.fbplbadge {
  background-color: #3b5998;
  display: block;
  height: 150px;
  top: 50%;
  margin-top: -75px;
  position: absolute;
  left: -47px;
  width: 47px;
  background-image: url('~static/images/w2b_vertical-right.png');
  background-repeat: no-repeat;
  overflow: hidden;
  -webkit-border-top-left-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.fb-iframe {
  width: 320px;
  height: 500px;
}
</style>
