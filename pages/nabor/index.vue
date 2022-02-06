<template>
  <div>
    <section class="wrapper style1">
      <div class="container">
        <h2>Ranky</h2>
        <nuxt-link tag="li" to="/yt">
          <a>YouTuber</a>
        </nuxt-link>

        <br />
        <h2>Nábory</h2>
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NaborPage',
}
</script>
