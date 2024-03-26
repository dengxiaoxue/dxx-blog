<template>
  <Editor style="height: 100%; overflow-y: hidden" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode" />
</template>

<script setup lang="ts">
import { shallowRef, onBeforeUnmount, ref, watch } from 'vue'
import { Editor } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

const props = withDefaults(
  defineProps<{
    mode?: 'default' | 'simple'
    content?: any
  }>(),
  {
    mode: 'default',
    content: '',
  },
)

const emits = defineEmits<{}>()

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')

watch(
  () => props.content,
  (val: any) => {
    valueHtml.value = val || ''
  },
)

// 编辑器配置
const editorConfig = { readOnly: true }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

defineExpose({
  editor: editorRef,
})
</script>
