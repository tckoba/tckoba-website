<template>
  <v-card align="center">
    <v-card-text>
      <v-avatar size="150">
        <v-img :src="member.imgURL"></v-img>
      </v-avatar>
      <v-card-title>
        {{ member.name }}
      </v-card-title>
      <v-card-subtitle>{{ member.designation }}</v-card-subtitle>
      {{ member.description }}</v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "ExCoMemberTile",
  props: ["member"],
};
</script>

<style>
</style>