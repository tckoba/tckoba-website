<template>
  <v-card>
    <v-card-title>{{ member.year }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <MemberTile :name="member.president" designation="President" />
        </v-col>
        <v-col cols="12" md="6">
          <MemberTile :name="member.secretary" designation="Secretray" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import MemberTile from "./MemberTIle.vue";
export default {
  name: "PresSecTile",
  props: ["member"],
  components: {
    MemberTile,
  },
};
</script>

<style>
</style>