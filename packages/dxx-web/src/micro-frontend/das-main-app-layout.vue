<template>
  <DasWebLayout :transition-config="transitionConfig">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #aside>
      <slot name="aside"></slot>
    </template>
    <template #tab>
      <slot name="tab"></slot>
    </template>
    <template #micro-app>
      <template v-for="item in microApps">
        <transition v-bind="transitionConfig">
          <DasMicroApp
            v-if="item.loaded"
            v-show="item.actived"
            :src="item.src || item.entry"
            :name="item.name"
            :full-path="item.currentFullPath"
            @loaded="handleMicroAppLoaded($event, item.name)"
          ></DasMicroApp>
        </transition>
      </template>
    </template>
  </DasWebLayout>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { microApps } from './store'
import { default as DasWebLayout } from '../components/das-web-layout.vue'
import { default as DasMicroApp } from './das-micro-app.vue'
import 'animate.css'

const props = defineProps<{ transitionConfig?: any }>()
const route = useRoute()
const transitionConfig = computed(() => {
  return {
    'enter-active-class': 'animate__animated animate__fadeInLeft',
    ...(props.transitionConfig || {}),
  }
})

// 统一加载子应用
const loadMicroApp = async (name: string) => {
  const microAppItem = microApps.value.find((item) => item.name === name)
  const activedMicroAppItem = microApps.value.find((item) => item.actived)

  const isMicroApp = !!microAppItem
  const isMicroAppFirstLoad = !microAppItem?.loaded
  const isMicroAppActived = microAppItem?.actived

  if (!isMicroApp) {
    if (activedMicroAppItem) activedMicroAppItem.actived = false
    return
  }

  const currentFullPath = route.fullPath.replace(microAppItem.routerPrefix || '', '') || '/'
  microAppItem.currentFullPath = currentFullPath

  // 首次加载子应用
  if (isMicroAppFirstLoad) {
    const src = microAppItem.entry + currentFullPath
    microAppItem.src = src
    const activedMicroAppItem = microApps.value.find((item) => item.actived)
    if (activedMicroAppItem) activedMicroAppItem.actived = false
    microAppItem.loaded = true
    microAppItem.actived = true
    return
  }

  // 激活子应用
  if (!isMicroAppActived) {
    if (activedMicroAppItem) activedMicroAppItem.actived = false
    microAppItem.actived = true
    return
  }
}

const handleMicroAppLoaded = (e: any, name: string) => {
  const microAppItem = microApps.value.find((item) => item.name === name)
  if (!microAppItem) return
  microAppItem.dom = e.target
}

watch(
  () => route.fullPath,
  () => {
    loadMicroApp(String(route.meta?.microAppName || ''))
  },
)
</script>

<style scoped></style>
