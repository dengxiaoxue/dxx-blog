import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Radio from './src/index.vue'

const DxxRadioRef = () => ref<InstanceType<typeof Radio> | null>(null)

const DxxRadio = withInstall(Radio)

export { DxxRadio, DxxRadioRef }
export default DxxRadio
