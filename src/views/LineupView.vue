<script setup lang="ts">
import { ref } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import EmbedItem from "@/components/EmbedItem.vue";
</script>

<template>
  <main>
    <Transition appear name="embed">
      <div class="embedContainer">
        <EmbedItem dj-name="Pekko Haimi" host="soundcloud" />
        <EmbedItem dj-name="Marumiini" host="soundcloud" />
        <EmbedItem dj-name="UtepiA" host="mixcloud" />
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.embedContainer {
  display: flex;
  padding: 100px 100px 0 100px;
  gap: 60px;
  opacity: 0.9;
}

.centerText {
  text-align: center;
}

#mainTitle {
  font-size: 100px;
  font-family: "mael";
  letter-spacing: 0.3rem;
}

#mainTitleBroken {
  display: none;
  font-family: "mael";
  letter-spacing: 0.15rem;
}

@media screen and (max-width: 900px) {
  .embedContainer {
    flex-direction: column;
    padding: 20px 20px 0 20px;
    gap: 20px;
  }
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.embed-enter-active,
.embed-leave-active {
  transition: opacity 5s ease;
}

.embed-enter-from,
.embed-leave-to {
  opacity: 0;
}
</style>
