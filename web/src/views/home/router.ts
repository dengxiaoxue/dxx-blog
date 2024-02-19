import type { RouteRecordRaw } from "vue-router";

export default {
  path: "/",
  component: () => import("./index.vue"),
} as RouteRecordRaw;
