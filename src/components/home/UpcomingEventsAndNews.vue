<template>
  <v-container class="body__content">
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12">
            <p>Upcoming Events</p>
          </v-col>
          <v-col v-for="i in 4" :key="i" cols="12">
            <EventCard />
          </v-col>
          <v-col><router-link to="/events"> See more</router-link></v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row>
          <v-col cols="12">
            <p>Upcoming News</p>
          </v-col>
          <v-col v-for="i in 3" :key="i" cols="12">
            <NewsCard :article="articles[i - 1]" />
          </v-col>
          <v-col><router-link to="/news"> See more</router-link></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventCard from "./EventCard.vue";
import NewsCard from "./NewsCard.vue";
import { articles } from "../../data/news";
export default {
  name: "UpcomingEventsAndNews",
  components: { EventCard, NewsCard },
  data: () => ({
    articles,
  }),
};
</script>