<template>
  <div class="dxx-ui-nav-bar">
    <el-menu
      :default-active="activeMenu"
      mode="horizontal"
      @select="handleSelect"
      :ellipsis="true"
      router
      class="dxx-ui-nav-bar-menu"
    >
      <template v-for="item in menus">
        <el-menu-item :index="item.to">{{ item.name }} </el-menu-item>
      </template>
      <!-- <el-sub-menu index="2">
        <template #title>ElSubMenu随笔</template>
        <el-menu-item index="2-1">生活感悟</el-menu-item>
        <el-menu-item index="2-2">读书感悟</el-menu-item>
      </el-sub-menu> -->
    </el-menu>
    <div class="right">
      <ElInput
        v-model="searchModelVal"
        style="width: 240px; padding: 15px 10px"
        :placeholder="placeholder"
        :prefix-icon="Search"
      >
      </ElInput>
      <el-icon class="dxx-icon" @click="switchTheme" size="20">
        <Sunny color="#565656" class="icon" :style="{ opacity: currentTheme === 'light' ? 1 : 0 }" />
        <Moon class="icon" :style="{ opacity: currentTheme === 'dark' ? 1 : 0 }" />
      </el-icon>
      <DxxIcon
        :icon="currentLang === 'en' ? 'en' : 'zh'"
        class="icon-lang"
        @click="switchLang"
        :iconColor="currentTheme === 'light' ? '#56565699' : '#fff'"
      ></DxxIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMenu, ElMenuItem, ElInput, ElIcon } from 'element-plus'
import { Search, Sunny, Moon } from '@element-plus/icons-vue'
import type { Emits, Props } from './type.sfc'
import { DxxIcon } from '../../icon/index'

withDefaults(defineProps<Props>(), {
  router: true,
})
const emits = defineEmits<Emits>()

const searchModelVal = ref('')
const currentTheme = ref<'light' | 'dark'>('light')
const currentLang = ref<'en' | 'zh-CN'>('zh-CN')

const handleSelect = (key: string, keyPath: string[]) => {
  emits('menu-handle-select', key, keyPath)
}
const switchTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  emits('switch-theme', currentTheme.value)
}
const switchLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'zh-CN' : 'en'
  emits('switch-lang', currentLang.value)
}
</script>

<style scoped lang="scss">
.dxx-ui-nav-bar {
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dxx-icon {
      cursor: pointer;
      position: relative;
      .icon {
        position: absolute;
        transition: 0.35s ease-out;
      }
    }
    .icon-lang {
      margin-left: 10px;
    }
  }
  .dxx-ui-nav-bar-menu {
    flex: 1;
    background-color: transparent;
  }
  :deep(.el-menu--horizontal.el-menu) {
    border-bottom: none;
  }
  :deep(.el-input__wrapper) {
    background-color: transparent;
  }
}
</style>
