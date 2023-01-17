import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import PageNotFound from "@/pages/PageNotFound.vue";
import PageHome from "@/pages/PageHome.vue";
import PageThreadShow from "@/pages/PageThreadShow.vue";
import sourceData from "@/data.json";
import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import PageForum from "@/pages/PageForum.vue";

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/forum/:id",
    name: "Forum",
    component: PageForum,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // ID 에 해당하는 데이터가 존재하는지 확인하는 API 를 호출
      const process = pipe(
        sourceData.threads,
        A.findFirst((t) => t.id === to.params.id),
        O.match(
          () => () =>
            next({
              name: "NotFound",
              params: { pathMatch: to.path.substring(1).split("/") },
              query: to.query,
              hash: to.hash,
            }),
          () => () => next()
        )
      );

      process();
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
