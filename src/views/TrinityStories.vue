<template>
  <div>
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <v-container>
      <v-row>
        <StoryTile v-for="(story, i) in stories" :key="i" :story="story" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import PageIntroduction from "../components/PageIntroduction.vue";
import StoryTile from "../components/StoryTile.vue";
import jumbrotronImage from "../assets/trinity-stories/trinity-stories.png";
import { heading, introduction, stories } from "../data/trinity-stories.json";
export default {
  name: "TrinityStories",
  components: { Jumbotron, PageIntroduction, StoryTile },
  data: () => ({
    jumbrotronImage,
    heading,
    introduction,
    stories,
  }),
};
</script>