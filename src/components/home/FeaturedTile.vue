<template>
  <v-card>
    <v-img max-height="200" max-width="200" :src="program.image"> </v-img>
    <v-card-title> {{ program.title }} </v-card-title>
    <v-card-text>{{ program.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FeaturedTile",
  props: ["program"],
};
</script>