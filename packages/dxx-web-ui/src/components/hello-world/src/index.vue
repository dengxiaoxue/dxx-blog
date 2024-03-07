<script lang="ts">
export default {
  name: 'hello-world'
}
</script>

<script setup lang="ts">
import { ElAffix, ElButton } from 'element-plus'

defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="hello-div">{{ msg }}</h1>
  <ElAffix><el-button type="primary">Offset top 120px</el-button></ElAffix>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.hello-div {
  color: pink;
}
</style>
