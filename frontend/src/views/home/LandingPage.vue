<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import { usePlayerStore} from "@/stores/player.js";

const router = useRouter();
const playerStore = usePlayerStore();

const handleJoinGame = () =>{
  if(playerStore.roomId.length === 6){
    router.push(`/join/${playerStore.roomId}`)
  }
}

</script>

<template>
  <div class="landing-page">

    <v-container class=" d-flex flex-md-column justify-center w-75 ga-4">
      <h1 class="text-h3 font-weight-bold text-center"> The Open-Source Quiz Platform for Everyone </h1>
      <p class="text-subtitle-1 text-center"> Host engaging quizzes, join interactive games, and contributes to a community-driven, privacy-focused alternative </p>
    </v-container>
    <v-row>
      <v-col class="d-flex flex-md-column align-center justify-center ga-4 ">
        <v-icon class="rounded-lg bg-amber-accent-1 "> mdi-access-point</v-icon>
        <h2> Host a Game </h2>

        <p> Create and launch your own quiz. Access your host dashboard here.</p>

        <v-btn prepend-icon="mdi-apps" elevation="2" color="primary" size="x-large" to="/host">
          Go to Host Dashboard
        </v-btn>

        <p> or
          <router-link to="/join">Load from Memory </router-link>
          <v-icon>mdi-information</v-icon>
        </p>
      </v-col>

      <v-col class="d-flex flex-md-column align-center justify-center ga-4 " bg="">
        <v-icon class="rounded-lg bg-amber-accent-1"> mdi-gamepad-square</v-icon>
        <h2> Join a Game </h2>
        <p> Got a Game PIN ? Enter it below to join the fun and start playing !</p>

        <v-container class="d-flex flex-md-row align-center gap-4">
          <v-text-field
            :rules="playerStore.roomRules"
            hide-details="auto"
            label="Enter Game Pin"
            class="w-50"
            v-model="playerStore.roomId"
            ></v-text-field>

          <v-btn  @click="handleJoinGame" prepend-icon="mdi-login" color="secondary"  class="" elevation="2"  size="x-large" to="/join">Join</v-btn>
        </v-container>

      </v-col>
    </v-row>


  </div>
</template>

<style scoped>

</style>
