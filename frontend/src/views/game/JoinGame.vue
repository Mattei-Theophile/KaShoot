<script setup>
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import {usePlayerStore} from "@/stores/player";

const playerStore = usePlayerStore();

const router = useRouter();
const {roomId} = router.currentRoute.value.params;


const handleRoomGame = () => {
  if (playerStore.roomId.length === 6 && playerStore.name.length > 3) {
    router.push(`/room/${playerStore.roomId}`)
  }
}
onBeforeMount(() => {
  if(roomId){
    playerStore.roomId = roomId
  }
})

</script>

<template>
  <v-container>
    <h2> Join the Fun ! </h2>
    <p> <span v-if="!playerStore.roomId"> Enter the game Pin and </span> choose you nickname to start </p>
  </v-container>

  <v-container>
    <v-text-field v-if="!playerStore.roomId" :rules="playerStore.roomRules" v-model="playerStore.roomId" label="Enter Game Pin" outlined></v-text-field>
    <v-text-field :rules="playerStore.nameRules" v-model="playerStore.name"  label="Choose Nickname" outlined></v-text-field>

    <v-btn @click="handleRoomGame" color="primary" elevation="2"> Join Game </v-btn>
  </v-container>


</template>

<style scoped>

</style>

