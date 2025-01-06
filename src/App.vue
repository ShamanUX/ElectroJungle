<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import EmbedItem from "@/components/EmbedItem.vue";
import LineupView from "./views/LineupView.vue";
import AboutDialog from "@/components/AboutDialog.vue";
import InstagramIcon from "@/assets/instagram.png";
import { useDisplay } from "vuetify";
import TwinkleStars1 from "@/assets/TwinkleStars1.png";
import TwinkleStars2 from "@/assets/TwinkleStars2.png";

const showLineup = ref(true);

const { mobile, width } = useDisplay();

const date = "2.1.2025";
const dayOfWeek = "SATURDAY";
const timeAndPlace = "20-01 @BOTANIA";
const ticketLink = "";
</script>

<template>
  <main>
    <div id="bgImg"></div>
    <Transition appear>
      <div id="content">
        <div id="bgOverlay"></div>
        <h1 id="mainTitle" class="centerText">
          <span class="bigLetter">E</span>LECTRO<span
            class="bigLetter title-spacing-fix"
            >J</span
          >UNGLE
          <!-- Decorate title with stars -->
          <div class="animate-deco-1">
            <img class="title-deco-1" :src="TwinkleStars1" />
          </div>
          <div class="animate-deco-2">
            <img class="title-deco-2" :src="TwinkleStars2" />
          </div>
        </h1>
        <!-- Show different date info layout on pc -->
        <div v-if="width > 1000" class="diagonalHeadersContainer">
          <h2 id="headerDate">{{ dayOfWeek }} {{ date }}</h2>
          <h2 id="headerTime">{{ timeAndPlace }}</h2>
        </div>
        <!-- Tablets and phones -->
        <div v-if="width <= 1000" class="mobileHeadersContainer">
          <h2 id="headerDate" class="centerText nowrap">
            {{ dayOfWeek }} {{ date }}
          </h2>
          <h2 id="headerTime" class="centerText nowrap">
            {{ timeAndPlace }}
          </h2>
          <div
            class="header-text-background-banner black-fadeout-gradient"
          ></div>
        </div>
        <div class="wrapper">
          <nav>
            <!-- 
              <v-btn
                color="#6b0b54"
                text="Lineup"
                @click="showLineup = !showLineup"
              ></v-btn>
            -->
            <AboutDialog />
            <v-btn
              v-if="!mobile || width >= 500"
              class="tickets-btn"
              text="Tickets"
              :href="ticketLink"
              target="_blank"
            ></v-btn>
            <v-btn
              v-if="mobile && width < 500"
              rounded="default"
              class="tickets-btn"
              :href="ticketLink"
              target="_blank"
              height="36px"
              width="36px"
              ><v-icon icon="mdi-ticket" size="default"></v-icon
            ></v-btn>

            <a
              href="https://www.instagram.com/electrojungle_joensuu/"
              target="_blank"
              class="instaBtnLink"
            >
              <img class="instaBtn" :src="InstagramIcon" />
            </a>
          </nav>
        </div>
        <Transition name="embed"
          ><LineupView v-if="showLineup"></LineupView
        ></Transition>

        <div class="genre-text-art">
          <h2 class="genre-text">CHILLOUT | DOWNTEMPO</h2>
          <h2 class="genre-text">PROGHOUSE | TRANCE | PSY</h2>
          <div class="genre-background-banner black-fadeout-gradient"></div>
        </div>
      </div>
    </Transition>
  </main>
</template>

<style scoped>
/* Soundcloud embed styling */
:deep(.g-background-default) {
  background-color: rgb(58, 58, 58) !important;
}

@keyframes animate-deco-1 {
  from {
    transform: rotate(4deg);
  }
  to {
    transform: rotate(-4deg);
  }
}

@keyframes animate-deco-2 {
  from {
    transform: rotate(8deg);
  }
  to {
    transform: rotate(-8deg);
  }
}

@keyframes twinkle {
  0% {
    opacity: 100%;
  }
  3% {
    opacity: 40%;
  }
  6% {
    opacity: 100%;
  }
}

.animate-deco-1 {
  animation-name: animate-deco-1;
  animation-duration: 6s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  position: absolute;
  left: 0;
  top: 0;
  width: fit-content;
  height: fit-content;
}

.title-deco-1 {
  animation: twinkle 10s ease-in 0s infinite forwards;
}

.title-deco-2 {
  animation: twinkle 13s ease-in 2s infinite forwards;
}

.animate-deco-2 {
  animation-name: animate-deco-2;
  animation-duration: 8s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: ;
  position: absolute;
  right: 10px;
  top: -20px;
  width: fit-content;
  height: fit-content;
}

.instaBtnLink {
  max-height: 36px;
  max-width: 36px;
}
.instaBtn {
  max-width: 36px;
  max-height: 36px;
}

.tickets-btn {
  background: linear-gradient(45deg, rgba(54, 54, 54, 0.8), 10%, #226ce0);
}

.nowrap {
  white-space: nowrap;
}

.wrapper nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 10px;
  font-size: 30px;
  margin-top: 10px;
  z-index: 4;
  position: relative;
}
.diagonalHeadersContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transform: rotate(-15deg);
  left: 5vw;
  margin-top: 20px;
  z-index: 3;
}

.mobileHeadersContainer {
  width: fit-content;
  margin: 0 auto;
  z-index: 3;
  position: relative;
}

.purple-glow {
  text-shadow: rgb(148, 2, 85) 10px 0px 20px;
}
/*
.horizontalHeaders {
  writing-mode: vertical-lr;
  text-orientation: upright;
}
*/
.centerText {
  text-align: center;
}

.genre-text-art {
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  place-items: center;
  width: 80%;
  max-width: 600px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.genre-text {
  text-align: center;
  position: relative;
  z-index: 5;
}

.title-spacing-fix {
  margin-left: -0.35em;
}

.header-text-background-banner {
  position: absolute;
  height: 100%;

  width: 110%;
  top: 0;
  z-index: 0;
}

.genre-background-banner {
  position: absolute;
  height: 100%;
  width: 110%;
  z-index: 2;
}

.black-fadeout-gradient {
  background: linear-gradient(
    to right,
    #ffffff00,
    rgb(1, 12, 7) 50%,
    #ffffff00
  );
}

#headerDate {
  z-index: 1;
  position: relative;
}

#headerTime {
  position: relative;
  z-index: 1;
}

#mainTitle {
  position: relative;
  font-size: 100px;
  font-family: "dxcitrus";
  color: #ddfaff;
  text-align: center;
  margin-bottom: -20px;
  padding-left: 100px;
  padding-right: 100px;
  width: fit-content;
  margin: 0 auto;
  -webkit-text-stroke: #0db8ff 1px;
  text-shadow: 1px 1px 10px #0db8ff, 1px 1px 10px #ccc;
}
.bigLetter {
  font-size: 120px;
}

#content {
  overflow: hidden;
  overflow-y: scroll;
  position: relative;
  max-width: 100vw;

  height: 100vh;
  max-height: 100vh;
  z-index: 3;
}

#bgImg {
  overflow: hidden;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 3, 19);
  background-position: center center;
  background-size: cover;
  background-image: url("./assets/electrojungle-tausta.png");

  background-repeat: no-repeat;
  z-index: 1;
}

#bgImg2 {
  position: absolute;
  max-width: 100vw;
  max-height: 70vh;
  width: 70vh;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1) rotate(150deg);
  z-index: 2;
  animation-name: spinzoom;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

#bgOverlay {
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(
    0deg,
    rgba(212, 11, 68, 0.2) 0%,
    rgba(222, 45, 92, 0) 100%
  );
  position: absolute;
}

@media screen and (max-width: 900px) {
  .animate-deco-1 {
    left: -90px;
    top: 20px;
  }
  .animate-deco-2 {
    top: -50px;
    right: -70px;
  }
  .title-deco-1 {
    transform: scale(0.8);
  }

  #mainTitle {
    display: block;
    font-size: 80px;
    margin-top: 20px;
    text-shadow: rgba(189, 27, 207, 1) 0px 0px 10px;
    margin-bottom: auto;
    padding: 0;
  }
  .genre-text-art {
    display: none;
  }
  #bgImg {
    background-size: cover;
  }
  .bigLetter {
    font-size: 100px;
  }
}

@media screen and (max-width: 682px) {
  .animate-deco-1 {
    left: -90px;
    top: -20px;
  }
  .animate-deco-2 {
    top: -40px;
    right: -60px;
  }
  .title-deco-1 {
    transform: scale(0.5);
  }

  .title-deco-2 {
    transform: scale(0.5);
  }
  #mainTitle {
    display: block;
    font-size: 40px;
    margin-bottom: auto;
  }
  .bigLetter {
    font-size: 60px;
  }
  #bgImg {
    background-size: cover;
  }
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 4s ease;
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

@keyframes spinzoom {
  from {
    transform: translate(-50%, -50%) scale(2) rotate(150deg);
  }
  to {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
}
</style>
