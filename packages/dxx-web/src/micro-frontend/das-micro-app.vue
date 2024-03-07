<template>
  <iframe class="das-micro-app" :src="props.src" :name="props.name" frameborder="0" @load="handleLoad"></iframe>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { sendMessageToMicroApp } from './bus'
const props = defineProps<{ src: string; name: string; actived?: boolean; fullPath?: string }>()
const emit = defineEmits<{
  loaded: [e: any]
}>()

const handleLoad = (e: any) => {
  emit('loaded', e)
}

const actived = computed(() => props.actived)
const fullPath = computed(() => props.fullPath)

const handleFullPathChange = (newFullPath: any, _: any) => {
  sendMessageToMicroApp(props.name, {
    type: 'router',
    cmd: 'push',
    params: newFullPath,
  })
}

const handleActivedChange = () => {}

watch(() => fullPath.value, handleFullPathChange)
watch(() => actived.value, handleActivedChange)
</script>

<style scoped>
.das-micro-app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
