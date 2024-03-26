<template>
  <dxx-breadcrumb separator="/">
    <dxx-breadcrumb-item :to="{ path: '/' }">homepage</dxx-breadcrumb-item>
    <dxx-breadcrumb-item><a href="/">promotion management</a></dxx-breadcrumb-item>
    <dxx-breadcrumb-item>promotion list</dxx-breadcrumb-item>
    <dxx-breadcrumb-item>promotion detail</dxx-breadcrumb-item>
  </dxx-breadcrumb>
  <preview></preview>
</template>

<script setup lang="ts">
import { DxxBreadcrumb, DxxBreadcrumbItem } from 'dxx-web-ui'
import { preview } from '@/components'
</script>

<style scoped lang="scss"></style>
