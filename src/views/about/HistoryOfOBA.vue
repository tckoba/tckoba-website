<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <v-container class="body">
      <v-row>
        <v-col class="body__content">
          <p v-for="(para, i) in body" :key="i">{{ para }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Jumbotron from "../../components/Jumbotron.vue";
import jumbrotronImage from "../../assets/historyOfOBA.png";
import { heading, body } from "../../data/historyOfOBA.json";
export default {
  name: "HistoryOfOBA",
  components: { Jumbotron },
  data: () => ({
    jumbrotronImage,
    heading,
    body,
  }),
};
</script>

<style scoped>
.body__content {
  margin: 50px auto;
  background-color: #f9f9f9;
  padding: 50px;
  text-align: justify;
}
</style>
