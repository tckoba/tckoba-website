<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <PageIntroduction :content="introduction" />
  </div>
</template>

<script>
import Jumbotron from "../../components/Jumbotron.vue";
import PageIntroduction from "../../components/PageIntroduction.vue";
import jumbrotronImage from "../../assets/history-of-oba/historyOfOBA.png";
import { heading, introduction } from "../../data/historyOfOBA.json";
export default {
  name: "HistoryOfOBA",
  components: { Jumbotron, PageIntroduction },
  data: () => ({
    jumbrotronImage,
    heading,
    introduction,
  }),
};
</script>

