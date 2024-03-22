import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin/write',
  component: () => import('./index.vue'),
} as RouteRecordRaw
