import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: () => import("@/views/viewNotes.vue"),
    },
    {
      path: "/stats",
      name: "stats",
      component: () => import("@/views/viewStats.vue"),
    },
  ],
});

export default router;
