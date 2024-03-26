import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import RadioButton from './src/index.vue'

const DxxRadioButtonRef = () => ref<InstanceType<typeof RadioButton> | null>(null)

const DxxRadioButton = withInstall(RadioButton)

export { DxxRadioButton, DxxRadioButtonRef }
export default DxxRadioButton
