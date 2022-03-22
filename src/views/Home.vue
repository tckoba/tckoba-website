<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <UpcomingEventsAndNews />
    <FeaturedPrograms />
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import { heading } from "../data/home.js";
import jumbrotronImage from "../assets/home/home.png";
import UpcomingEventsAndNews from "../components/home/UpcomingEventsAndNews.vue";
import FeaturedPrograms from "../components/home/FeaturedPrograms.vue";

export default {
  name: "Home",
  data: () => ({
    heading,
    jumbrotronImage,
  }),
  components: {
    Jumbotron,
    UpcomingEventsAndNews,
    FeaturedPrograms,
  },
};
</script>
