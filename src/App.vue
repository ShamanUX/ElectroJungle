<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import EmbedItem from "@/components/EmbedItem.vue";
import LineupView from "./views/LineupView.vue";
import AboutDialog from "@/components/AboutDialog.vue";
import InstagramIcon from "@/assets/instagram.png";
import GenreText1 from "@/assets/Folktronica, House, Goa.png";
import GenreText2 from "@/assets/Reggae, PsyDub, Trance.png";
import { useDisplay } from "vuetify";

const showLineup = ref(false);

const { mobile, width } = useDisplay();
</script>

<template>
  <main>
    <Transition appear>
      <div id="bgImg">
        <div id="bgOverlay"></div>
        <h1 id="mainTitle" class="centerText">
          <span class="bigLetter">E</span>lectro<span class="bigLetter">J</span
          >ungle
        </h1>
        <!-- Show different date info layout on pc -->
        <div v-if="width > 1100" class="diagonalHeadersContainer glow">
          <h2 id="headerDate" class="">SATURDAY 8.6.2024</h2>
          <h2 id="headerTime" class="">20-01 @BOTANIA</h2>
        </div>
        <div v-if="width <= 1100" class="mobileHeadersContainer glow">
          <h2 id="headerDate" class="centerText">
            SATURDAY <span></span>8.6.2024
          </h2>
          <h2 id="headerTime" class="centerText">20-01 @BOTANIA</h2>
        </div>
        <h2></h2>
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
              href="https://kide.app/events/86a02da1-e33b-4478-b019-3b06164d7ddc"
              target="_blank"
            ></v-btn>
            <v-btn
              v-if="mobile && width < 500"
              rounded="default"
              class="tickets-btn"
              href="https://kide.app/events/86a02da1-e33b-4478-b019-3b06164d7ddc"
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
          <img :src="GenreText1" /> <img :src="GenreText2" />
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

.wrapper nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 10px;
  font-size: 30px;
  margin-top: 10px;
}
.diagonalHeadersContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transform: rotate(-15deg);
  left: 5vw;
  margin-top: 20px;
}

.mobileHeadersContainer {
  background: radial-gradient(
    rgba(48, 9, 121, 1) 0%,
    rgba(48, 9, 121, 0.2) 50%,
    rgba(0, 0, 36, 0) 80%
  );
  width: fit-content;
  padding-left: 100px;
  padding-right: 100px;
  margin: 0 auto;
}

.glow {
  text-shadow: rgba(189, 27, 207, 1) 10px 0px 20px;
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
  width: 80%;
  max-width: 600px;
  left: 50%;
  transform: translate(-50%, -50%);
}

#headerDate {
  -webkit-text-stroke: 1px black;
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

  background: radial-gradient(
    rgba(48, 9, 121, 1) 0%,
    rgba(48, 9, 121, 0.2) 50%,
    rgba(0, 0, 36, 0) 80%
  );
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
  position: relative;
  max-width: 100vw;
  height: 100vh;
  background-color: rgb(0, 3, 19);
  background-position: center center;
  background-size: contain;
  background-image: url("./assets/SoundsystemPlajays.png");

  background-repeat: no-repeat;
}

#bgOverlay {
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(
    0deg,
    rgba(212, 11, 68, 0.569) 0%,
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
