<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <v-container>
      <v-row>
        <Event v-for="(event,i) in events" :key="i" :event="event" />
      </v-row>
    </v-container>
  </div>
</template>

<script>

import Jumbotron from "../components/Jumbotron.vue";
import jumbrotronImage from "../assets/historyOfOBA.png";
import Event from '../components/Events/Event.vue';
import { heading ,events} from "../data/events.json";

export default {
  name: "Events",
  components: {Event,Jumbotron},
  data: ()=>({
    jumbrotronImage,
    heading,
    events,
  }),
};
</script>
