<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  djName: String,
  embedLink: String,
  host: String,
});

const windowWidth = ref(window.innerWidth);
const windowHeight = ref(window.innerHeight);

const frameHeight = computed(() => {
  return windowWidth.value > 900 ? 200 : 100;
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="elements">
    <h2 class="name">{{ djName }}</h2>

    <iframe
      v-if="host === 'soundcloud' && djName?.toLowerCase() === 'pekko haimi'"
      width="100%"
      :height="frameHeight"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1322784883&color=%23260906"
    ></iframe>
    <iframe
      v-if="host === 'soundcloud' && djName?.toLowerCase() === 'marumiini'"
      width="100%"
      :height="frameHeight"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1641122880&color=%23260906"
    ></iframe>
    <iframe
      v-if="host === 'mixcloud' && djName?.toLowerCase() == 'utepia'"
      width="100%"
      :height="frameHeight + 20"
      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=%2FUtepia%2Felectrojungle-summer-24-promo-mix%2F"
      frameborder="0"
    ></iframe>
    <iframe
      v-if="host === 'mixcloud' && djName?.toLowerCase() == 'tdj/penzoline'"
      width="100%"
      :height="frameHeight + 20"
      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=%2FPenzoline%2Ftdj-live-kajastus-vol2-03022024%2F"
      frameborder="0"
    ></iframe>
    <iframe
      v-if="host === 'mixcloud' && djName?.toLowerCase() === 'jonnex'"
      width="100%"
      :height="frameHeight + 20"
      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=%2FJoonac%2Ftold-them-it-would-be-liquid-fiktion-pikkujoulut-2022-liquid-set%2F"
      frameborder="0"
    >
    </iframe>
  </div>
</template>

<style scoped>
.elements {
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 100%;
}

.name {
  white-space: nowrap;
  color: #fff;
  background-color: rgb(43, 43, 43);
  width: max-content;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
}
</style>
