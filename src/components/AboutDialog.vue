<script setup lang="ts">
import fiktiologo from "@/assets/Fiktio Logo white.png";
import botaniaLogo from "@/assets/logo-vaaka-vihrea-botania.png";
</script>

<template>
  <v-dialog class="aboutDialog">
    <template v-slot:activator="{ props }">
      <v-btn color="#2E780C" v-bind="props" text="About"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="About" color="#520160">
        <v-icon
          class="close-icon"
          size="large"
          icon="mdi-close"
          @click="isActive.value = false"
        ></v-icon>
        <v-card-text>
          <p>
            The wait is over and soon we can tune ourselves to exotic
            frequencies!
          </p>
          <br />
          <p>
            Finland's most tropical electronic music event gets you dancing in
            the middle of Botania's beautiful jungle. The music will begin with
            rejuvenating chillout and downtempo beats by Utepia, the trance
            master Serotoniini-S3tä serves eye watering melodies and the evening
            peaks with the amazing Wiola’s psytrance set! <br />
            On the event's fifth chapter the host will be Fiktio ry, with
            decades-long party organizing experience, together with Botania
            staff.
          </p>
          <br />
          <h2>♡ ACCESSIBILITY ♡</h2>
          <p>
            The event venue is wheelchair accessible, if needed contact Botania
            staff member at the door or beforehand. The staff will assist you at
            the venue. Accessible toilet at the venue. tel. 050 5629482
          </p>
          <br />
          <h2>♡ SAFER SPACE EVENT ♡</h2>
          <p>
            It is our goal to make events enjoyable and safe for everyone. That
            is why Botania and our staff have committed to following safer space
            guidelines, and we hope our customers adhere to them as well. Let's
            work together to create a safer space for everyone! <br />
            If you encounter harassment or inappropriate behaviour at our
            events, tell our staff about it. We will intervene!
          </p>
          <br />

          <p>
            The age limit is K18. Alcoholic beverages and snackbar are available
            at the venue. Jackets and large bags must be left at the cloakroom.
          </p>
          <br />
          <p>
            The event is hosted by
            <a href="https://fiktio.fi" target="_blank">Fiktio</a> in
            association with
            <a href="https://botania.fi" target="_blank">Botania</a>
            staff.
          </p>
        </v-card-text>
        <div class="logosContainer">
          <img
            class="fiktiologo"
            alt="Fiktio association logo"
            :src="fiktiologo"
          />
          <div>
            <img class="botanialogo" alt="Botania logo" :src="botaniaLogo" />
          </div>
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
.fiktiologo {
  max-width: 30%;
  padding: 1em;
  margin: 1em;
  flex: 1;
}

.botanialogo {
  flex-shrink: 1;
  max-width: 100%;
  padding: 1em;
}

.aboutDialog {
  font-family: "vox";
  font-weight: 300;
  width: 80%;
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
