import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/photo',
  component: () => import('./index.vue')
} as RouteRecordRaw
