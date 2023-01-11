import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import PageHome from "@/views/PageHome.vue";

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
