<template>
  <ElInput v-model="inputValue" :type="type" v-bind="$attrs">
    <template #prepend v-if="$slots.prepend">
      <!-- 输入框前置内容 -->
      <slot name="prepend"> </slot>
    </template>
    <template #append v-if="$slots.append">
      <!-- 输入框后置内容 -->
      <slot name="append"></slot>
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix"> </slot>
    </template>
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix"> </slot>
    </template>
  </ElInput>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElInput } from 'element-plus'
import type { InputProps } from './type.sfc'
const props = withDefaults(defineProps<InputProps>(), {
  type: 'input',
  modelValue: '',
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
})
</script>

<style scoped lang="scss"></style>
