<script setup lang="ts">
import rajatonLogo from "@/assets/rajatontaide_logo_transparent.svg";
</script>

<template>
  <div class="about">
    <h2>
      ElectroJungle on elektronisen musiikin ja trooppisen Botanian puutarhan
      yhdistymä, jossa kuulijat saavat hengittää monien tyylilajien ja
      harvinaisten kasvien taikaa. Tapahtuma on osa Rajaton Taide ry:tä, joka
      järjestää monikulttuurisia musiikkitapahtumia.
    </h2>
    <img class="circleLogo" :src="rajatonLogo" />
  </div>
</template>

<style scoped>
.about {
  background-color: rgba(72, 107, 177, 0.5);
  font-family: Roboto;
  max-width: 50%;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
}
.circleLogo {
  background-color: #fff;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  padding: 4px;
}

@media screen and (max-width: 450px) {
  .about {
    margin: 20px;
  }
}
</style>
