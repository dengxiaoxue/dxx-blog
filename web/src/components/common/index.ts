import { ref } from 'vue'
import preview from './src/preview.vue'

const previewRef = () => ref<InstanceType<typeof preview> | null>(null)

export { preview, previewRef }
export default {}
