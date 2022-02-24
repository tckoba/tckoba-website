<template>
  <div class="news">
    <Jumbotron :heading="heading" :image="jumbrotronImage" />
    <section class="articles">
      <Article
        v-for="article in articles"
        :key="article.title"
        :article="article"
      />
    </section>
  </div>
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import jumbrotronImage from "../assets/historyOfOBA.png";
import { heading } from "../data/news.json";
import Article from '../components/News/Article.vue';

export default {
  name: "News",
  components: { Article , Jumbotron},
  data: () => ({
    jumbrotronImage,
    heading,
    articles: [
      {
        title: '125 Year Celebrations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        src: require('../assets/News/125.jpg')
      },
      {
        title:"Lorem Ipsma",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        src: require('../assets/News/125.jpg')
      },
      {
        title: 'Calling All architects',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        src: require('../assets/News/125.jpg')
      }
    ]
  }),
};
</script>

<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  main {
    width:100vw;
    min-height:100vh;
    overflow:hidden;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .articles{
    display: flex;
    max-width:1280px;
    padding:25px;
    margin:0 auto;
  }
</style>