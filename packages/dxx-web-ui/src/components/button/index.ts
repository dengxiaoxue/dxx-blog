import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Button from './src/index.vue'

const DxxButtonRef = () => ref<InstanceType<typeof Button> | null>(null)

const DxxButton = withInstall(Button)

export { DxxButton, DxxButtonRef }
export default DxxButton
