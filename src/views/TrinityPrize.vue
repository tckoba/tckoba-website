<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <PageIntroduction :content="introduction" />
    <AwardsContainer :awards="awards" />
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import PageIntroduction from "../components/PageIntroduction.vue";
import AwardsContainer from "../components/TrinityPrize/AwardsContainer.vue";
import jumbrotronImage from "../assets/trinity-prize.png";
import { heading, introduction, awards } from "../data/trinity-prize.js";
export default {
  name: "TrinityPrize",
  components: { Jumbotron, PageIntroduction, AwardsContainer },
  data: () => ({
    jumbrotronImage,
    heading,
    introduction,
    awards,
  }),
};
</script>