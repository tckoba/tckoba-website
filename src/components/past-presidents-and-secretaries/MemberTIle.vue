<template>
  <v-card flat>
    <v-row>
      <v-col cols="auto">
        <v-avatar color="primary" size="75"></v-avatar>
      </v-col>
      <v-col>
        <v-card-title>{{ name }}</v-card-title>
        <v-card-subtitle>{{ designation }}</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MemberTile",
  props: ["name", "designation"],
};
</script>

<style>
</style>