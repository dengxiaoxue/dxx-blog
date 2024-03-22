import { ref } from 'vue'
import editor from './src/editor.vue'
import render from './src/render.vue'

const editorRef = () => ref<InstanceType<typeof editor> | null>(null)
const renderRef = () => ref<InstanceType<typeof render> | null>(null)

export { editor, render, editorRef, renderRef }
export default {}
