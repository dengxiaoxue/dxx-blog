<template>
  <BackEnd @login="login"></BackEnd>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BackEnd from './back-end.vue'

const $router = useRouter()

const login = () => {
  $router.push('/manage/login')
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
