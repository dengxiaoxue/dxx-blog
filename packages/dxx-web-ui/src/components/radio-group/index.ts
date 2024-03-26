import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import RadioGroup from './src/index.vue'

const DxxRadioGroupRef = () => ref<InstanceType<typeof RadioGroup> | null>(null)

const DxxRadioGroup = withInstall(RadioGroup)

export { DxxRadioGroup, DxxRadioGroupRef }
export default DxxRadioGroup
