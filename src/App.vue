<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import EmbedItem from "@/components/EmbedItem.vue";
import LineupView from "./views/LineupView.vue";
import AboutDialog from "@/components/AboutDialog.vue";

const showLineup = ref(false);
</script>

<template>
  <main>
    <Transition appear>
      <div id="bgImg">
        <h1 id="mainTitle" class="centerText">
          <span class="bigLetter">E</span>lectro<span class="bigLetter">J</span
          >ungle
        </h1>
        <h2 id="headerDate" class="centerText">Saturday 20.1.2024</h2>
        <h2 id="headerTime" class="centerText">20-00 @Botania</h2>
        <h2></h2>
        <div class="wrapper">
          <nav>
            <v-btn
              color="#6b0b54"
              text="Lineup"
              @click="showLineup = !showLineup"
            ></v-btn>
            <AboutDialog />
            <v-btn class="tickets-btn" text="Tickets"></v-btn>
          </nav>
        </div>
        <Transition name="embed"
          ><LineupView v-if="showLineup"></LineupView
        ></Transition>
      </div>
    </Transition>
  </main>
</template>

<style scoped>
/* Soundcloud embed styling */
:deep(.g-background-default) {
  background-color: rgb(58, 58, 58) !important;
}

.tickets-btn {
  background: linear-gradient(45deg, rgba(54, 54, 54, 0.8), 10%, #226ce0);
}

.wrapper nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 10px;
  font-size: 30px;
  margin-top: 10px;
}
.centerText {
  text-align: center;
}

#mainTitle {
  font-size: 100px;
  font-family: "mael";
  letter-spacing: 0.4rem;
  text-shadow: rgba(189, 27, 207, 1) 0px 0px 70px;
  color: #dbd9d9;
}
.bigLetter {
  font-size: 120px;
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
  background-color: rgb(0, 0, 0);
  background-position: center center;
  background-size: contain;
  background-image: url("./assets/EJ background for website.jpg");
  background-repeat: no-repeat;
}

@media screen and (max-width: 900px) {
  #mainTitle {
    display: block;
    font-size: 40px;
    margin-top: 20px;
    text-shadow: rgba(189, 27, 207, 1) 0px 0px 10px;
  }
  #bgImg {
    background-size: cover;
  }
  .bigLetter {
    font-size: 50px;
  }
}

@media screen and (max-width: 450px) {
  #mainTitle {
    display: block;
    font-size: 40px;
  }
  #bgImg {
    background-size: cover;
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
  transition: opacity 2s ease;
}

.embed-enter-from,
.embed-leave-to {
  opacity: 0;
}
</style>
