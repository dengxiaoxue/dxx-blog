<template>
  <div class="das-web-app-container">
    <div class="header" ref="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <div class="aside" ref="aside">
        <slot name="aside"></slot>
      </div>
      <div class="container">
        <div class="tab">
          <slot name="tab"> </slot>
        </div>
        <div class="router-view">
          <div v-show="!route.meta.isMicroApp" style="width: 100%; height: 100%">
            <router-view v-slot="{ Component, route }">
              <transition v-bind="transitionConfig">
                <keep-alive>
                  <component :is="Component" v-if="route.meta.keepAlive" :key="route.path" />
                </keep-alive>
              </transition>

              <transition v-bind="transitionConfig">
                <component :is="Component" v-if="!route.meta.keepAlive" />
              </transition>
            </router-view>
          </div>

          <div v-show="route.meta.isMicroApp" style="height: 100%; width: 100%">
            <slot name="micro-app"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import 'animate.css'
const props = defineProps<{ transitionConfig?: any }>()

const route = useRoute()

const transitionConfig = computed(() => {
  return {
    'enter-active-class': 'animate__animated animate__fadeInLeft',
    ...(props.transitionConfig || {}),
  }
})
</script>

<style scoped>
.das-web-app-container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.das-web-app-container .header {
  /* pointer-events: all; */
}
.das-web-app-container .main {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}
.das-web-app-container .main .aside {
  pointer-events: all;
  height: 100%;
  z-index: 999;
}

.das-web-app-container .main .container {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.das-web-app-container .main .container .router-view {
  flex: 1;
}
</style>
