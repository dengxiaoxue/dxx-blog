<template>
  <el-breadcrumb-item v-bind="$attrs"> <slot></slot></el-breadcrumb-item>
</template>

<script setup lang="ts">
import { ElBreadcrumbItem } from 'element-plus'
</script>

<style scoped lang="scss"></style>
