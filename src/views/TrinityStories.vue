<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <PageIntroduction :content="introduction" />
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import PageIntroduction from "../components/PageIntroduction.vue";
import jumbrotronImage from "../assets/trinity-stories.png";
import { heading, introduction, stories } from "../data/trinity-stories.json";
export default {
  name: "HistoryOfOBA",
  components: { Jumbotron, PageIntroduction },
  data: () => ({
    jumbrotronImage,
    heading,
    introduction,
    stories,
  }),
};
</script>