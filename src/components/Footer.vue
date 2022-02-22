<template>
  <v-footer padless color="primary lighten-1" class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <v-card class="footer__card" flat>
            <v-img max-height="150" max-width="250" v-bind:src="logo"></v-img>
            <v-card-text>
              <p class="ma-0">{{ name }}</p>
              <p v-for="(line, i) in address" :key="i" class="ma-0">
                {{ line }}
              </p>
              <p>Map</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card class="footer__card" flat>
            <v-card-text>
              <v-row>
                <v-col v-for="(item, i) in menuItems" cols="12" md="6" :key="i">
                  <v-card class="footer__card" flat :to="item.path">{{
                    item.title
                  }}</v-card></v-col
                >
              </v-row></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <p>&copy; {{ new Date().getFullYear() }} — {{ name }}</p>
    </v-container>
  </v-footer>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  data: () => ({
    logo,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    name: "Trinity College Old Boys' Association",
    address: ["No.262 A9", "Kandy", "Sri Lanka"],
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
};
</script>

<style>
.footer__card {
  background-color: unset !important;
}
</style>