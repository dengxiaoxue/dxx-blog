<template>
  <div class="dxx-home-page">
    <span class="dxx-home-page-title">home123-Linyi</span>
    <DxxAuthorCard width="260" height="315"></DxxAuthorCard>
    <DxxArticleCard width="560" height="400"></DxxArticleCard>
  </div>
</template>

<script setup lang="ts">
import { DxxAuthorCard } from '@/components/author-card'
import { DxxArticleCard } from '@/components/article-card'
</script>

<style scoped lang="scss">
.dxx-home-page {
  width: 100%;
  height: 100%;
  color: pink;
}
.dxx-home-page-title {
  color: pink;
}
</style>
