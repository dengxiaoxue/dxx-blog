import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import IconC from './src/Index.vue'

const DxxIconRef = () => ref<InstanceType<typeof IconC> | null>(null)

const DxxIcon = withInstall(IconC)

export * from './src/type.sfc'
export { DxxIcon, DxxIconRef }
export default DxxIcon
