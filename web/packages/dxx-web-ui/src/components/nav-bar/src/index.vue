<template>
  <div class="dxx-nav-bar">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      :ellipsis="true"
      class="dxx-nav-bar-menu"
    >
      <template v-for="item in menus">
        <el-menu-item :index="item.id">{{ item.name }}</el-menu-item>
      </template>
      <!-- <el-sub-menu index="2">
        <template #title>随笔</template>
        <el-menu-item index="2-1">生活感悟</el-menu-item>
        <el-menu-item index="2-2">读书感悟</el-menu-item>
      </el-sub-menu> -->
    </el-menu>
    <div>
      <ElInput
        v-model="searchModelVal"
        style="width: 240px; padding: 15px 10px"
        :placeholder="placeholder"
        :prefix-icon="Search"
      >
      </ElInput>
      <ElSwitch
        v-model="themeSwitch"
        class="ml-2"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        style="--el-switch-on-color: #565656"
        @change="switchTheme"
      ></ElSwitch>
      <ElSwitch
        v-model="langSwitch"
        :active-action-icon="Promotion"
        :inactive-action-icon="Star"
        style="--el-switch-on-color: #565656; padding: 0px 10px"
        @change="switchLang"
      ></ElSwitch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElInput, ElSwitch } from 'element-plus'
import { Search, Sunny, Moon, Star, Promotion } from '@element-plus/icons-vue'
import type { Emits, Props, Menus } from './type.sfc'

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const searchModelVal = ref('')
const themeSwitch = ref()
const langSwitch = ref()
const activeIndex = computed(() =>
  props.menus && props.menus?.length > 0 ? props.menus[0].id : ''
)

const handleSelect = (key: string, keyPath: string[]) => {
  emits('menu-handle-select', key, keyPath)
}
const switchTheme = (val: any) => {
  emits('switch-theme', val)
}
const switchLang = (val: any) => {
  emits('switch-lang', val)
}
</script>

<style scoped lang="scss">
.dxx-nav-bar {
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(188, 188, 178);
  .dxx-nav-bar-menu {
    flex: 1;
    background-color: var(--common-bg);
    color: var(--common-color);
    :deep .el-menu-item,
    :deep .el-sub-menu__title {
      color: var(--common-color);
    }
  }
  :deep .el-menu--horizontal.el-menu {
    border-bottom: none;
  }
}
</style>
