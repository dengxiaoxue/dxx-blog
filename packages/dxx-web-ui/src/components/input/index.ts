import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Input from './src/index.vue'

const DxxInputRef = () => ref<InstanceType<typeof Input> | null>(null)

const DxxInput = withInstall(Input)

export { DxxInput, DxxInputRef }
export default DxxInput
