<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  djName: String,
  embedLink: String,
  host: String,
  /**
   * For mix source, copy the embed iframe tag from soundcloud or mixcloud.
   * if soundcloud, paste here this part of embed tag's src property (exclude the color part):
   * https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1953536411
   *
   * if mixcloud, paste the 'feed' part of embed tag's src property:
   * %2FUtepia%2Fpsytrance-mix-by-utepia%2F
   *
   * This way the color and style settings will stay the same
   */
  mixSource: String,
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
      v-if="host === 'soundcloud'"
      width="100%"
      :height="frameHeight"
      scrolling="no"
      frameborder="no"
      :src="`${mixSource}&color=%23260906`"
    ></iframe>

    <iframe
      v-if="host === 'mixcloud'"
      width="100%"
      :height="frameHeight + 20"
      :src="`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=0&light=1&feed=${mixSource}`"
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
