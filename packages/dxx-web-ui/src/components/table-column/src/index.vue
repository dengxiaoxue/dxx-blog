<template>
  <el-table-column v-bind="$attrs">
    <template #default="{ row, column, $index }">
      <slot name="default">{{ row[column.property] }}</slot>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { ElTableColumn } from 'element-plus'
</script>

<style scoped lang="scss"></style>
