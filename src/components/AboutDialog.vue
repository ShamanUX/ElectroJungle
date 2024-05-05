<script setup lang="ts">
import rajatonLogo from "@/assets/rajatontaide_logo_transparent.svg";
import botaniaLogo from "@/assets/logo-vaaka-vihrea-botania.png";
</script>

<template>
  <v-dialog class="aboutDialog">
    <template v-slot:activator="{ props }">
      <v-btn color="#2E780C" v-bind="props" text="About"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="About">
        <v-icon
          class="close-icon"
          size="large"
          icon="mdi-close"
          @click="isActive.value = false"
        ></v-icon>
        <v-card-text>
          <p>Let's welcome the summer with Botania's garden rave!</p>
          <br />
          <p>
            ElectroJungle's third edition focuses on organic and summery sound.
            The event starts in the blissful outdoor garden, shifting to the
            large indoor greenhouse oozing with tropical vegetation closer to
            the midnight. In addition to resident DJ UtepiA, the music selection
            will be served by TDJ (Penzoline), who is known for Keidas and
            Kajastus event concepts in the city of Tampere.
          </p>
          <br />
          <p>Alcoholic beverages and snackbar are available at the venue.</p>
          <br />
          <p>
            The event is hosted by
            <a href="https://rajatontaide.fi">Rajaton Taide</a> association.
          </p>
        </v-card-text>
        <div class="logosContainer">
          <img class="rajatonlogo" :src="rajatonLogo" />
          <div><img class="botanialogo" :src="botaniaLogo" /></div>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.logosContainer {
  display: flex;
  max-width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 10px;
}
.rajatonlogo {
  max-width: 30%;
  background-color: rgb(226, 226, 226);
  padding: 1em;
  border-radius: 50%;
  margin: 1em;
  flex: 1;
}

.botanialogo {
  flex-shrink: 1;
  max-width: 100%;
  padding: 1em;
}

.aboutDialog {
  font-family: "exo";
  width: 50%;
}
.close-icon {
  position: absolute;
  top: 16px;
  right: 20px;
}

@media screen and (max-width: 450px) {
  .logosContainer {
    max-width: 100%;
  }
  .rajatonlogo {
    max-width: 100px;
  }
  .aboutDialog {
    width: 100%;
  }
}
</style>
