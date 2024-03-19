import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/login',
  component: () => import('./index.vue'),
} as RouteRecordRaw
