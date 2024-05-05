<script setup lang="ts">
import { ref } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import EmbedItem from "@/components/EmbedItem.vue";
</script>

<template>
  <main>
    <div class="embedContainer">
      <EmbedItem dj-name="UtepiA" host="mixcloud" />
      <EmbedItem dj-name="TDJ/Penzoline" host="mixcloud" />
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
    padding: 20px 20px 0 20px;
    gap: 20px;
  }
}
</style>
