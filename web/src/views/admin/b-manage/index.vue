<template>
  <div class="manage-wrap">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.manage-wrap {
  --el-font-size-base: 18px;
  padding: 60px;
  box-sizing: border-box;
  position: relative;
}
</style>
