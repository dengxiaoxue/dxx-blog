<template>
  <div class="recent-news">
    <div class="art-card" v-for="item in 3">
      <DxxArticleCard></DxxArticleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxxArticleCard } from '@/components'
</script>

<style scoped lang="scss">
.recent-news {
  display: flex;
  flex-wrap: wrap;
  .art-card {
    margin: 0 15px 10px 0;
    flex: 1;
    min-width: 290px;
  }
}
</style>
