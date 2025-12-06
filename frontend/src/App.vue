<script setup>
import Header from "@/component/core/navigation/Header.vue";

</script>

<template>

  <v-app>
    <Header />
    <v-main>

      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>

</template>

<style scoped></style>
