<script setup lang="ts">
import rajatonLogo from "@/assets/rajatontaide_logo_transparent.svg";
</script>

<template>
  <v-dialog class="aboutDialog" width="80%">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="About"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="About">
        <v-card-text>
          ElectroJungle combines the tropical gardens of Botania Joensuu with
          mesmerizing electronic music from various subgenres. <br />
          Alcoholic beverages and snackbar are available at the venue.
        </v-card-text>
        <img class="rajatonlogo" :src="rajatonLogo" />
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.rajatonlogo {
  max-width: 200px;
  background-color: rgb(226, 226, 226);
  padding: 20px;
  border-radius: 50%;
  margin: 20px;
}
.aboutDialog {
  font-family: "exo";
}

@media screen and (max-width: 450px) {
  .rajatonlogo {
    max-width: 100px;
    padding: 5px;
  }
}
</style>
