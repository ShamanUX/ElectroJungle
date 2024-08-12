<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import EmbedItem from "@/components/EmbedItem.vue";
import LineupView from "./views/LineupView.vue";
import AboutDialog from "@/components/AboutDialog.vue";
import InstagramIcon from "@/assets/instagram.png";
import GenreText1 from "@/assets/Folktronica, House, Goa.png";
import GenreText2 from "@/assets/Reggae, PsyDub, Trance.png";
import AutumnPortalImg from "@/assets/ElectroJungle_AutumnPortal.png";
import { useDisplay } from "vuetify";

const showLineup = ref(false);

const { mobile, width } = useDisplay();

const date = "7.9.2024";
const dayOfWeek = "SATURDAY";
const timeAndPlace = "20-01 @BOTANIA";
const ticketLink =
  "https://kide.app/events/62d26aa9-bb30-41c4-a55b-65e27e51cf3a";
</script>

<template>
  <main>
    <div id="bgImg"></div>
    <Transition appear>
      <div id="content">
        <div id="bgOverlay"></div>
        <h1 id="mainTitle" class="centerText">
          <span class="bigLetter">E</span>lectro<span class="bigLetter">J</span
          >ungle
        </h1>
        <!-- Show different date info layout on pc -->
        <div v-if="width > 1100" class="diagonalHeadersContainer glow">
          <h2 id="headerDate" class="">
            {{ dayOfWeek }}
            <span class="dateText">{{ date }}</span>
          </h2>
          <h2 id="headerTime" class="">{{ timeAndPlace }}</h2>
        </div>
        <!-- Tablets and phones -->
        <div v-if="width <= 1100" class="mobileHeadersContainer glow">
          <h2 id="headerDate" class="centerText nowrap">
            {{ dayOfWeek }} <span class="dateText"> {{ date }}</span>
          </h2>
          <h2 id="headerTime" class="centerText nowrap">
            {{ timeAndPlace }}
          </h2>
          <div class="header-text-background-banner"></div>
        </div>
        <div class="wrapper">
          <nav>
            <v-btn
              color="#6b0b54"
              text="Lineup"
              @click="showLineup = !showLineup"
            ></v-btn>
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
          <h2 class="genre-text">Downtempo | House | Trance</h2>
          <h2 class="genre-text">DnB | Goa | Psy</h2>
          <!-- Old genre text imgs 
              <img :src="GenreText1" /> <img :src="GenreText2" />
              -->
          <div class="genre-background-banner"></div>
        </div>
      </div>
    </Transition>

    <img id="bgImg2" :src="AutumnPortalImg" />
  </main>
</template>

<style scoped>
/* Soundcloud embed styling */
:deep(.g-background-default) {
  background-color: rgb(58, 58, 58) !important;
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

.dateText {
  font-family: "agencyfb";
  font-weight: 400;
  font-size: 28px;
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

.glow {
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
  -webkit-text-stroke: 1px purple;
  text-align: center;
  position: relative;
  z-index: 5;
}

.header-text-background-banner {
  position: absolute;
  height: 100%;
  background: linear-gradient(to right, #ffffff00, purple 50%, #ffffff00);
  width: 110%;
  top: 0;
  z-index: 0;
}

.genre-background-banner {
  position: absolute;
  height: 100%;
  background: linear-gradient(to right, #ffffff00, purple 50%, #ffffff00);
  width: 110%;
  z-index: 2;
}

#headerDate {
  -webkit-text-stroke: 1px rgb(69, 4, 69);
  z-index: 1;
  position: relative;
}

#headerTime {
  position: relative;
  z-index: 1;
}

#mainTitle {
  font-size: 100px;
  font-family: "mael";
  letter-spacing: 0.4rem;
  text-shadow: rgb(87, 73, 96) 0px 0px 70px;
  color: #f1f1f1;
  text-align: center;
  margin-bottom: -20px;
  padding-left: 100px;
  padding-right: 100px;
  width: fit-content;
  margin: 0 auto;
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
  background-image: url("./assets/ElectroJungle_WavyBackground.jpg");

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
  #mainTitle {
    display: block;
    font-size: 40px;
    margin-top: 20px;
    text-shadow: rgba(189, 27, 207, 1) 0px 0px 10px;
    margin-bottom: auto;
    padding: 0;
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
    margin-bottom: auto;
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
