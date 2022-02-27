<template>
  <div class="news">
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <v-container class="my-5">
      <v-layout row xs12>
        <v-col
          v-for="article in articles"
          :key="article.title"
          cols="12"
          xs="12"
          md="6"
          lg="4"
        >
          <NewsArticle :article="article" />
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import jumbrotronImage from "../assets/news/news.png";
import { heading, articles } from "../data/news.js";
import NewsArticle from "../components/news/NewsArticle.vue";

export default {
  name: "News",
  components: { NewsArticle, Jumbotron },
  data: () => ({
    jumbrotronImage,
    heading,
    articles,
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.articles {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>