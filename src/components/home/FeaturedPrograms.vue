<template>
  <v-container class="body__content">
    <v-row>
      <v-col>
        <p>FeaturedPrograms</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in 3" :key="i"
        ><FeaturedTile :program="programs[i - 1]" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeaturedTile from "./FeaturedTile.vue";
import { programs } from "../../data/featuredPrograms";
export default {
  name: "FeaturedPrograms",
  components: { FeaturedTile },
  data: () => ({
    programs,
  }),
};
</script>