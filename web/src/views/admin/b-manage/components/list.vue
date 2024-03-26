<template>
  <div class="manage-content">
    <dxx-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <dxx-tab-pane label="文章列表" name="list">
        <ArticleList></ArticleList>
      </dxx-tab-pane>
      <dxx-tab-pane label="草稿箱" name="second">草稿箱</dxx-tab-pane>
      <dxx-tab-pane label="回收站" name="third">回收站</dxx-tab-pane>
    </dxx-tabs>
  </div>
</template>

<script setup lang="ts">
import { DxxTabPane, DxxTabs } from 'dxx-web-ui'
import { ref } from 'vue'
import ArticleList from './article-list.vue'

const emits = defineEmits<{
  (e: 'to-preview', row: any): void
  (e: 'to-edit', row: any): void
}>()

const activeName = ref('list')

const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="scss">
.manage-content {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  border-radius: var(--radius);
  padding: 20px;
  :deep(.el-table) {
    font-size: 16px;
  }
}
</style>
