import type { RouteRecordRaw } from 'vue-router'

export default {
  name: 'essay',
  path: '/essay',
  component: () => import('./index.vue')
} as RouteRecordRaw
