import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'essay-detail',
  path: '/essay/:id',
  component: () => import('./index.vue'),
} as RouteRecordRaw
