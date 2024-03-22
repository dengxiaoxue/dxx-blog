<template>
  <div class="admin-wrap">
    <div class="menu-wrap">
      <DxxNavBar :activeMenu="$route.path" :menus="menus" style="--text-color: red"> </DxxNavBar>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { DxxNavBar } from 'dxx-web-ui'
import { useRoute } from 'vue-router'
import type { Menus } from 'dxx-web-ui'

const emits = defineEmits<{
  (e: 'login'): void
}>()
const $route = useRoute()
const menus = reactive<Menus[]>([
  { name: '仪表盘', to: '/admin/' },
  { name: '创作', to: '/admin/write' },
])
</script>

<style scoped lang="scss">
.admin-wrap {
  --el-menu-hover-bg-color: #000;
  --el-menu-active-color: var(--theme-c-3);
  --el-menu-text-color: #fff;
  // --el-menu-bg-color: pink; // 内部为透明
  display: flex;
  height: 100%;
  .menu-wrap {
    width: 200px;
    background: var(--theme-c-1);
    :deep(.el-menu) {
      border-right: none;
    }
    :deep(.el-menu-item) {
      font-size: 20px !important;
    }
  }
  .main {
    flex: 1;
    min-width: 700px;
    overflow-y: overlay;
    box-sizing: border-box;
    position: relative;
  }
}
/**todo 横向滚动条 */
.main::-webkit-scrollbar {
  /* 纵向滚动条 宽度 */
  width: 6px;
  /* 横向滚动条 高度 */
  height: 6px;
  background: transparent;
}
.main::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #bebebe;
  border: 1px solid transparent;
  transition: border 0.15s;
  background-clip: 'content-box';
}
.main::-webkit-scrollbar-corner,
.main::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
