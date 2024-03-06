import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import NavBar from './src/index.vue'

const DxxNavBarRef = () => ref<InstanceType<typeof NavBar> | null>(null)

const DxxNavBar = withInstall(NavBar)

export * from './src/type.sfc'
export { DxxNavBar, DxxNavBarRef }
export default DxxNavBar
