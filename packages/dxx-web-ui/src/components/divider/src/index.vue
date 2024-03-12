<template>
  <div class="divider-ui-wrap">
    <el-divider>
      <div class="content">
        <el-icon><StarFilled /></el-icon>
        <div class="divider-title">{{ title }}</div>
        <el-icon><StarFilled /></el-icon>
      </div>
    </el-divider>
  </div>
</template>

<script setup lang="ts">
import { ElDivider, ElIcon } from 'element-plus'
import { StarFilled } from '@element-plus/icons-vue'
import type { DiliderProps } from './type.sfc'
withDefaults(defineProps<DiliderProps>(), {
  title: '标题',
})
</script>

<style scoped lang="scss">
.divider-ui-wrap {
  height: 100px;
  display: flex;
  align-items: center;
}
.content {
  display: flex;
  align-items: center;
  .divider-title {
    padding: 0 10px;
    font-weight: 700;
    font-size: 36px;
  }
}
</style>
