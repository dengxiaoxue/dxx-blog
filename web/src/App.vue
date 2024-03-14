<template>
  <DxxNavBar
    class="app-nav-bar"
    :activeMenu="$route.path"
    :menus="menus"
    :placeholder="i18n('placeholder-search').value"
    @switch-theme="(val: any) => setTheme(val)"
    @switch-lang="(val: any) => setLang(val)"
  >
  </DxxNavBar>
  <div class="main">
    <router-view></router-view>
  </div>
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
  { name: i18n('message-router'), to: '/message' },
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

.app-nav-bar {
  background-color: var(--common-nav-bg);
  position: fixed; /* 新属性sticky */
  top: 0; /* 距离页面顶部距离 */
  z-index: 10;
  left: 0;
  right: 0;
  min-width: 800px;
  .el-menu-item {
    font-size: 20px !important;
  }
  .el-menu-item,
  .el-sub-menu__title {
    color: var(--common-nav-color);
  }
}
.main {
  height: 100%;
  width: 100%;
}
</style>
