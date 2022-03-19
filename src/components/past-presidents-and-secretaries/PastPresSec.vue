<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel v-for="(decade, i) in decades" :key="i">
        <v-expansion-panel-header>
          {{ decade.decade }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <PresSecTile
            v-for="(member, j) in decade.members"
            :key="j"
            :member="member"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import PresSecTile from "./PresSecTile.vue";
export default {
  name: "PastPresSec",
  props: ["decades"],
  components: { PresSecTile },
};
</script>

<style>
</style>