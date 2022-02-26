import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/history-of-oba",
    name: "HistoryOfOBA",
    component: () => import("../views/about/HistoryOfOBA.vue"),
  },
  {
    path: "/about/branches-and-affiliated-bodies",
    name: "BranchesAndAffiliatedBodies",
    component: () => import("../views/about/BranchesAndAffiliatedBodies.vue"),
  },
  {
    path: "/about/exco",
    name: "ExCo",
    component: () => import("../views/about/ExCo.vue"),
  },
  {
    path: "/about/aims/objectives",
    name: "AimsAndObjectives",
    component: () => import("../views/about/AimsAndObjectives.vue"),
  },
  {
    path: "/about/past-pesidents-and-secretaries",
    name: "PastPresidentsAndSecretaries",
    component: () => import("../views/about/PastPresidentsAndSecretaries.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/trinitystories",
    name: "TrinityStories",
    component: () => import("../views/TrinityStories.vue"),
  },
  {
    path: "/t150",
    name: "T150",
    component: () => import("../views/T150.vue"),
  },
  {
    path: "/trinityprize",
    name: "TrinityPrize",
    component: () => import("../views/TrinityPrize.vue"),
  },
  {
    path: "/apply-for-membership",
    name: "ApplyForMembership",
    component: () => import("../views/ApplyForMembership.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
