<template>
  <div>
    <v-app-bar app prominent dense class="navbar">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-img :src="logo" height="96" contain position="left"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-list-item
          v-for="(item, i) in menuItems"
          exact
          :key="i"
          :to="item.path"
          class="navbar__list-item primary--text"
          active-class="primary--text text--accent-4"
        >
          <v-list-item-title v-if="item.path != null">{{
            item.title
          }}</v-list-item-title>
          <v-menu
            v-if="item.path == null"
            offset-y
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-title v-bind="attrs" v-on="on">
                {{ item.title }}
              </v-list-item-title>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in item.children"
                :key="index"
                :to="item.path"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
import logo from "../assets/logo.png";
import { menuItems } from "../data/navbar.js";
export default {
  name: "Navbar",
  data: () => ({
    logo,
    drawer: false,
    group: null,
    menuItems,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  margin-top: 48px !important;
}
</style>