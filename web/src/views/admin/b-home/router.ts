import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin/',
  component: () => import('./index.vue'),
} as RouteRecordRaw
