<script setup lang="ts">
import { ref } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import EmbedItem from "@/components/EmbedItem.vue";
</script>

<template>
  <main>
    <div class="embedContainer">
      <EmbedItem
        dj-name="WIOLA 23-01"
        host="soundcloud"
        mix-source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1953536411"
      />
      <EmbedItem dj-name="SEROTONIINI-S3TÄ 21:30-23" host="mixcloud" />
      <EmbedItem
        dj-name="UTEPIA 20-21:30"
        host="mixcloud"
        mix-source="%2FUtepia%2Futepia-mix-la-penja-fest-ii-01092024%2F"
      />
    </div>
  </main>
</template>

<style scoped>
.embedContainer {
  display: flex;
  padding: 100px 100px 0 100px;
  gap: 60px;
  opacity: 0.9;
  position: relative;
  z-index: 9999;
}

.centerText {
  text-align: center;
}

@media screen and (max-width: 900px) {
  .embedContainer {
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    gap: 20px;
  }
}
</style>
