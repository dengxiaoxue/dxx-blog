import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin/manage',
  component: () => import('./index.vue'),
} as RouteRecordRaw
