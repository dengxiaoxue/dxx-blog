import type { RouteRecordRaw } from "vue-router";

export default {
  path: "/about",
  component: () => import("./index.vue"),
} as RouteRecordRaw;
