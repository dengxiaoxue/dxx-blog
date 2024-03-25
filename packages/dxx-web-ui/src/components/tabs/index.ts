import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Tabs from './src/index.vue'

const DxxTabsRef = () => ref<InstanceType<typeof Tabs> | null>(null)

const DxxTabs = withInstall(Tabs)

export { DxxTabs, DxxTabsRef }
export default DxxTabs
