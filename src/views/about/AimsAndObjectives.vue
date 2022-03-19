<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <v-container>
      <v-row>
        <v-col class="body__content">
          <p>The aims and objectives of the “ASSOCIATION” shall be,</p>
          <ul>
            <li v-for="(item, i) in content" :key="i">{{ item }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Jumbotron from "../../components/Jumbotron.vue";
import jumbrotronImage from "../../assets/history-of-oba/historyOfOBA.png";
import { heading, content } from "../../data/aimsAndObjectives.js";
export default {
  name: "HistoryOfOBA",
  components: { Jumbotron },
  data: () => ({
    jumbrotronImage,
    heading,
    content,
  }),
};
</script>