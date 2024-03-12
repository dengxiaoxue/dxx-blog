import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Divider from './src/index.vue'

const DxxDividerRef = () => ref<InstanceType<typeof Divider> | null>(null)

const DxxDivider = withInstall(Divider)

export { DxxDivider, DxxDividerRef }
export default DxxDivider
