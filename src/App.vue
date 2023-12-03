<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import EmbedItem from "@/components/EmbedItem.vue";
import LineupView from "./views/LineupView.vue";
import AboutDialog from "@/components/AboutDialog.vue";
import InstagramIcon from "@/assets/instagram.png";
import { useDisplay } from "vuetify";

const showLineup = ref(false);

const { mobile, width } = useDisplay();
</script>

<template>
  <main>
    <Transition appear>
      <div id="bgImg">
        <h1 id="mainTitle" class="centerText">
          <span class="bigLetter">E</span>lectro<span class="bigLetter">J</span
          >ungle
        </h1>
        <!-- Show different date info layout on pc -->
        <div v-if="width > 1100" class="diagonalHeadersContainer glow">
          <h2 id="headerDate" class="">SATURDAY 20.1.2024</h2>
          <h2 id="headerTime" class="">20-00 @BOTANIA</h2>
        </div>
        <div v-if="width <= 1100" class="glow">
          <h2 id="headerDate" class="centerText">SATURDAY 20.1.2024</h2>
          <h2 id="headerTime" class="centerText">20-00 @BOTANIA</h2>
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
              href="https://kide.app/events/f9896873-a580-465f-a386-d2d72505d3cc"
              target="_blank"
            ></v-btn>
            <v-btn
              v-if="mobile && width < 500"
              rounded="default"
              class="tickets-btn"
              href="https://kide.app/events/f9896873-a580-465f-a386-d2d72505d3cc"
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

#mainTitle {
  font-size: 100px;
  font-family: "mael";
  letter-spacing: 0.4rem;
  text-shadow: rgba(189, 27, 207, 1) 0px 0px 70px;
  color: #f1f1f1;
  margin-bottom: -20px;
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
    margin-bottom: auto;
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
