import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/admin/manage',
  component: () => import('./index.vue'),
  children: [
    { path: '/admin/manage', component: () => import('./components/list.vue') },
    { path: '/admin/manage/preview', component: () => import('./components/preview.vue') },
    { path: '/admin/manage/edit', component: () => import('./components/edit.vue') },
  ],
} as RouteRecordRaw
