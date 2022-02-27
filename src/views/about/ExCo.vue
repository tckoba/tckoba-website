<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <PageIntroduction :content="introduction" />
    <ExCoContainer :members="members" />
  </div>
</template>

<script>
import Jumbotron from "../../components/Jumbotron.vue";
import PageIntroduction from "../../components/PageIntroduction.vue";
import ExCoContainer from "../../components/exco/ExCoContainer.vue";
import jumbrotronImage from "../../assets/exco/exco.png";
import { heading, introduction, members } from "../../data/exco.json";
export default {
  name: "HistoryOfOBA",
  components: { Jumbotron, PageIntroduction, ExCoContainer },
  data: () => ({
    jumbrotronImage,
    heading,
    introduction,
    members,
  }),
};
</script>
