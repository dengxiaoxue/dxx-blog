<template>
  <FrontEnd @login="login"></FrontEnd>
</template>

<script setup lang="ts">
import FrontEnd from './front-end.vue'

const login = () => {
  window.open('/login/', '_blank');
}
</script>

<style>
/* 修改颜色 */
body {
  background: var(--common-bg);
  color: var(--common-color);
}
button {
  background: var(--common-btn-bg);
  color: var(--common-btn-color);
}
</style>
