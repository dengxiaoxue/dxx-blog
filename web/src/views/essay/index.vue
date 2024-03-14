<template>
  <div class="dxx-essay-page">
    <essayItem></essayItem>
  </div>
</template>

<script setup lang="ts">
import essayItem from './components/essay-item.vue'
</script>

<style scoped lang="scss">
.dxx-essay-page {
  padding: 94px 30px 30px 30px;
  box-sizing: border-box;
  border-top: 1px solid salmon;
  background-color: var(--essay-bg);
}
</style>
