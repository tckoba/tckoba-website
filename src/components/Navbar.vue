<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          LOGO
        </router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list-item
          v-for="(item, i) in menuItems"
          exact
          :key="i"
          :to="item.path"
          class="navbar__list-item"
          active-class="white--text text--accent-4"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- <v-img class="navbar__logo" :src="logo" /> -->
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(item, i) in menuItems"
            exact
            :key="i"
            :to="item.path"
            class="navbar__list-item"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
    menuItems: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Events", path: "/events" },
      { title: "News", path: "/news" },
      { title: "Gallery", path: "/gallery" },
      { title: "Stories", path: "/stories" },
      { title: "T150", path: "/t150" },
      { title: "Trinity Prize", path: "/trinityprize" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
