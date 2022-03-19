<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <PastPresSec :decades="decades" />
  </div>
</template>

<script>
import Jumbotron from "../../components/Jumbotron.vue";
import PastPresSec from "../../components/past-presidents-and-secretaries/PastPresSec.vue";
import jumbrotronImage from "../../assets/past-presidents-and-secretaries/pastPresidentsAndSecretaries.png";
import { heading, decades } from "../../data/pastPresidentsAndSecretaries.js";
export default {
  name: "PastPresidentsAndSecretaries",
  components: { Jumbotron, PastPresSec },
  data: () => ({
    jumbrotronImage,
    heading,
    decades,
  }),
};
</script>