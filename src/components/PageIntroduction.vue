<template>
  <v-container class="body">
    <v-row>
      <v-col class="body__content">
        <p v-for="(para, i) in content" :key="i">{{ para }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageIntroduction",
  props: ["content"],
};
</script>

<style scoped>
.body__content {
  margin: 50px auto;
  background-color: #f9f9f9;
  padding: 50px;
  text-align: justify;
}
</style>