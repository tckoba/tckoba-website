<template>
  <v-container>
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
