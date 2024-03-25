<template>
  <el-table-column v-bind="$attrs">
    <!-- 插槽穿透 -->
    <template v-for="(value, key) in $slots" #[key]="slotProps" :key="key">
      <slot :name="key" v-bind="slotProps"></slot>
    </template>
    <!-- <template #default="{ row, column, $index }">
      <slot name="default" :row="row" :column="column" :$index="$index">{{ row[column.property] }}</slot>
    </template> -->
  </el-table-column>
</template>

<script setup lang="ts">
import { ElTableColumn } from 'element-plus'
</script>

<style scoped lang="scss"></style>
