<template>
  <v-app>
    <QuicklinksBar />
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import QuicklinksBar from "./components/QuicklinksBar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar,
    Footer,
    QuicklinksBar,
  },
};
</script>
