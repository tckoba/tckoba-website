<template>
  <v-card>
    <v-avatar size="150">
      <v-img :src="winner.image"> </v-img>
    </v-avatar>
    <v-card-title>{{ winner.name }}</v-card-title>
    <v-card-subtitle>{{ winner.category }}</v-card-subtitle>
    <v-card-text> {{ winner.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WinnerTile",
  props: ["winner"],
};
</script>

<style>
</style>