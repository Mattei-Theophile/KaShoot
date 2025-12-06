<script setup>
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import {usePlayerStore} from "@/stores/player";

const playerStore = usePlayerStore();

const router = useRouter();
const {roomId} = router.currentRoute.value.params;


onBeforeMount(() => {
  if(roomId){
    playerStore.roomId = roomId
  }
  console.log(playerStore.isAdmin)
})


</script>

<template>

  <v-container>
    <h2> GAME PIN : {{playerStore.roomId}} </h2>

  </v-container>

  <v-container class="d-flex flex-md-row gap-4">

    <v-container>
      <p> Connected Players </p>

      <v-container class="d-flex flex-md-row flex-md-wrap gap-2">

      </v-container>

    </v-container>

    <v-container v-if="playerStore.isAdmin">
      <p> Host Controls</p>

    </v-container>

  </v-container>

</template>

<style scoped>

</style>
