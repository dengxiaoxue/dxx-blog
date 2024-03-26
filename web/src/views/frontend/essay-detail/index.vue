<template>
  <div>
    <dxx-breadcrumb separator=">">
      <dxx-breadcrumb-item :to="{ path: '/essay' }">随笔</dxx-breadcrumb-item>
      <dxx-breadcrumb-item>{{ title }}</dxx-breadcrumb-item>
    </dxx-breadcrumb>
    <preview class="preview"></preview>
  </div>
</template>

<script setup lang="ts">
import { DxxBreadcrumb, DxxBreadcrumbItem } from 'dxx-web-ui'
import { preview } from '@/components'
import { useRoute } from 'vue-router'

const $route = useRoute()
const title = $route.query.title
</script>

<style scoped lang="scss">
:deep(.el-breadcrumb) {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #fff;
  padding: 0 20px;
}
.preview {
  margin-top: 40px;
}
</style>
