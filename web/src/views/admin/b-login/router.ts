import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin/login',
  component: () => import('./index.vue'),
} as RouteRecordRaw
