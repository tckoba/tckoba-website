<template>
  <div class="news">
    <Article/>
  </div>
</template>

<script>
import Article from '../components/News/Article.vue';

export default {
  name: "News",
  components : {
    Article
  },
  data(){
    return {
      products: [
        {
          title: '125 Year Celebrations',
          color: 'Red',
          bgtext: 'AIR',
          src: require('../assets/News/125.jpg')
        },
      ]
    }
  }
};
</script>
