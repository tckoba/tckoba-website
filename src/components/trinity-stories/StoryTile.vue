<template>
  <v-col cols="12" xl="6">
    <v-card>
      <v-row>
        <v-col cols="4" class="hidden-xs-only">
          <v-img :src="story.image"></v-img>
        </v-col>
        <v-col>
          <v-img
            height="150"
            :src="story.image"
            class="hidden-sm-and-up"
          ></v-img>
          <v-card-title>{{ story.title }}</v-card-title>
          <v-card-subtitle>{{ story.author }}</v-card-subtitle>
          <v-card-text
            ><p>{{ story.descrption }}</p>
            <ShareNetwork
              network="facebook"
              url="https://news.vuejs.org/issues/180"
              title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
              description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
              quote="The hot reload is so fast it\'s near instant. - Evan You"
              hashtags="vuejs,vite"
            >
              Share on Facebook
            </ShareNetwork>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "StoryTile",
  props: ["story"],
};
</script>
