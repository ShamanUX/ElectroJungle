<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import MonsteraImg from "@/assets/ElectricMonstera.png";
import EmbedItem from "@/components/EmbedItem.vue";
</script>

<template>
  <main>
    <h1 id="mainTitle" class="centerText">ElectroJungle</h1>
    <div id="mainTitleBroken" class="centerText">
      <h1>Electro</h1>
      <h1>Jungle</h1>
    </div>
    <Transition appear>
      <div id="bgImg">
        <h2 id="headerDate" class="centerText">Lauantai 20.1.2012</h2>
        <h2 id="headerTime" class="centerText">20-00</h2>
        <div class="wrapper">
          <nav>
            <RouterLink to="/lineup">Lineup</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>

        <RouterView />
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.wrapper nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;
  font-size: 30px;
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
  line-height: 4rem;
}

#bgImg {
  overflow: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background-color: aliceblue;
  background-position: center center;
  background-size: cover;
  background-image: url("./assets/ElectricMonstera.png");
}

@media screen and (max-width: 450px) {
  #mainTitleBroken {
    display: none;
    font-size: 30px;
  }
  #mainTitle {
    display: block;
    font-size: 40px;
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
