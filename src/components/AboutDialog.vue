<script setup lang="ts">
import rajatonLogo from "@/assets/rajatontaide_logo_transparent.svg";
</script>

<template>
  <v-dialog class="aboutDialog" width="80%">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="About"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
</style>
