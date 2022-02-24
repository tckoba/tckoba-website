<template>
  <v-container class="jumbotron" fluid>
    <v-img
      class="jumbotron__image"
      :src="image"
      light
      gradient="to top, rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.5)"
    >
      <div class="jumbotron__text" v-if="home == null">
        <h1>{{ heading }}</h1>
      </div>
      <div v-if="home != null">
        <h1>{{ heading }}</h1>
        <h3>{{ heading }}</h3>
      </div>
    </v-img>
  </v-container>
</template>

<script>
export default {
  props: ["heading", "image", "home"],
  data: () => ({}),
};
</script>

<style scoped>
.jumbotron {
  padding: 0;
}

.jumbotron__image {
  height: 50vh;
  background: black;
}

.jumbotron__text {
  padding-top: 60px;
  color: white;
  text-align: center;
}
</style>