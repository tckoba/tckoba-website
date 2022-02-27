<template>
  <v-container class="body__content">
    <v-row>
      <v-col><h2>Night Of The Lions Awards</h2> </v-col>
    </v-row>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(award, i) in awards" :key="i">
          <v-expansion-panel-header>
            {{ award.year }} - {{ award.date }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="(winner, i) in award.winners"
                :key="i"
              >
                <WinnerTile :winner="winner" />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import WinnerTile from "./WinnerTile.vue";
export default {
  name: "AwardsContainer",
  props: ["awards"],
  components: { WinnerTile },
};
</script>
