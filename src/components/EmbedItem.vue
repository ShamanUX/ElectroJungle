<script setup lang="ts">
const props = defineProps({
  djName: String,
  embedLink: String,
  host: String,
});
</script>

<template>
  <div class="elements">
    <h2>{{ djName }}</h2>
    <iframe
      v-if="host === 'mixcloud' && djName?.toLowerCase() == 'jtl'"
      width="100%"
      height="200"
      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=%2Fjuha-litmanen%2Fjtl-live-at-electrojungle-botania-joensuu%2F"
      frameborder="0"
    ></iframe>
    <iframe
      v-if="host === 'soundcloud' && djName?.toLowerCase() === 'pekko haimi'"
      width="100%"
      height="200"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346615167&color=%3c3c3c"
    ></iframe>
    <iframe
      v-if="host === 'soundcloud' && djName?.toLowerCase() === 'marumiini'"
      width="100%"
      height="200"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1641122880&color=%3c3c3c"
    ></iframe>
    <iframe
      v-if="host === 'mixcloud' && djName?.toLowerCase() == 'utepia'"
      width="100%"
      height="200"
      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=%2FUtepia%2Flive-psy-set-at-electrojungle-joensuu-botania%2F"
      frameborder="0"
    ></iframe>
  </div>
</template>

<style scoped>
.elements {
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 100%;
}
</style>
