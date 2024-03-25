<template>
  <div class="manage-wrap">
    <div class="manage-content">
      <dxx-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <dxx-tab-pane label="文章列表" name="list">
          <ArticleList></ArticleList>
        </dxx-tab-pane>
        <dxx-tab-pane label="草稿箱" name="second">草稿箱</dxx-tab-pane>
        <dxx-tab-pane label="回收站" name="third">回收站</dxx-tab-pane>
      </dxx-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxxTabPane, DxxTabs } from 'dxx-web-ui'
import { ref } from 'vue'
import type { TabsPaneContext } from 'dxx-web-ui'
import ArticleList from './components/article-list.vue'

const activeName = ref('list')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="scss">
.manage-wrap {
  padding: 60px;
  .manage-content {
    background-color: #fff;
    box-shadow: var(--box-shadow);
    border-radius: var(--radius);
    padding: 20px;
  }
}
</style>
