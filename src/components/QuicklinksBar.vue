<template>
  <div>
    <v-app-bar app dense color="primary">
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-list-item
          v-for="(item, i) in quicklinks"
          exact
          :key="i"
          :to="item.path"
          class="navbar__list-item white--text"
          active-class="white--text text--accent-4"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import quicklinks from "../data/quicklinks.json";
export default {
  name: "Navbar",
  data: () => ({
    quicklinks,
  }),
};
</script>