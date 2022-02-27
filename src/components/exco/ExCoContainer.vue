<template>
  <v-container class="body__content">
    <v-row><h2>ExCo Members</h2></v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(member, i) in members" :key="i">
        <ExCoMemberTile :member="member" /> </v-col></v-row
  ></v-container>
</template>

<script>
import ExCoMemberTile from "./ExCoMemberTile.vue";
export default {
  name: "ExCoContainer",
  props: ["members"],
  components: { ExCoMemberTile },
};
</script>
