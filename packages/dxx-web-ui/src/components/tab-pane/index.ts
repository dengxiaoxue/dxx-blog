import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import TabPane from './src/index.vue'

const DxxTabPaneRef = () => ref<InstanceType<typeof TabPane> | null>(null)

const DxxTabPane = withInstall(TabPane)

export { DxxTabPane, DxxTabPaneRef }
export default DxxTabPane
