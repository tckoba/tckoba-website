<template>
  <v-footer padless color="primary" class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-img max-height="150" max-width="250" v-bind:src="logo"></v-img>
          <p class="ma-0 footer__text">{{ name }}</p>
          <p v-for="(line, i) in address" :key="i" class="ma-0 footer__text">
            {{ line }}
          </p>
          <p>Map</p>
          <div>
            <v-btn
              v-for="(item, i) in socialMedia"
              :key="i"
              class="mx-2 white--text"
              icon
              :href="item.link"
              target="__blank"
            >
              <v-icon size="24px">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="8">
          <v-row no-gutters>
            <v-col v-for="(item, i) in menuItems" cols="12" md="6" :key="i">
              <v-list-item
                v-if="item.path != null"
                :to="item.path"
                class="footer__text"
              >
                {{ item.title }}
              </v-list-item>
              <v-list-item v-if="item.path == null" class="footer__text">
                {{ item.title }}
              </v-list-item>
              <v-list-item
                v-for="(item, i) in item.children"
                :key="i"
                :to="item.path"
                dense
                class="footer__text"
              >
                {{ item.title }}
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider dark></v-divider>
      <p class="pa-3 footer__text text-center">
        &copy; {{ new Date().getFullYear() }} — {{ name }}
      </p>
    </v-container>
  </v-footer>
</template>

<script>
import logo from "../assets/logo.png";
import { menuItems } from "../data/navbar.js";
import { socialMedia, name, address } from "../data/footer.js";
export default {
  data: () => ({
    logo,
    socialMedia,
    name,
    address,
    menuItems,
  }),
};
</script>

<style scope>
.footer__text {
  color: white !important;
}
</style>