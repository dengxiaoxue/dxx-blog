import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/message',
  component: () => import('./index.vue')
} as RouteRecordRaw
