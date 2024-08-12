import { createRouter, createWebHistory } from "vue-router";
import LineupView from "@/views/LineupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/lineup",
      name: "lineup",
      component: LineupView,
    },
  ],
});

export default router;
