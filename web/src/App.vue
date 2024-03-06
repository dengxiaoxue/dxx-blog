<template>
  <DxxNavBar
    :activeMenu="$route.path"
    :menus="menus"
    :placeholder="i18n('placeholder-search').value"
    @switch-theme="(val: boolean) => val? setTheme('dark'): setTheme('light')"
    @switch-lang="(val: boolean) => val ? setLang('en'): setLang('zh-CN')"
  >
  </DxxNavBar>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { i18n, setLang, setTheme } from './utils/i18n'
import { DxxNavBar } from 'dxx-web-ui'
import { useRoute } from 'vue-router'
import type { Menus } from 'dxx-web-ui'

const $route = useRoute()

const menus = reactive<Menus[]>([
  { name: i18n('home-router'), to: '/' },
  { name: i18n('essay-router'), to: '/essay' },
  { name: i18n('photo-router'), to: '/photo' },
  { name: i18n('message-router'), to: '/message' }
])
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
