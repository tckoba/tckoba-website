<template>
  <v-card tile flat>
    <v-row>
      <v-col>
        <v-card-title>{{ article.title }}</v-card-title>
        <v-card-subtitle> {{ article.description }}</v-card-subtitle>
      </v-col>
      <v-col cols="auto">
        <v-img max-height="150" max-width="150" :src="article.image"></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["article"],
};
</script>

<style>
</style>