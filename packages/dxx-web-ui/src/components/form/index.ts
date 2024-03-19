import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Form from './src/Index.vue'

const DxxForm = withInstall(Form)

const DxxFormRef = () => ref<InstanceType<typeof Form> | null>(null)

export { DxxForm, DxxFormRef }
export default DxxForm
