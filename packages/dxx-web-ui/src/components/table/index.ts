import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Table from './src/index.vue'

const DxxTableRef = () => ref<InstanceType<typeof Table> | null>(null)

const DxxTable = withInstall(Table)

export { DxxTable, DxxTableRef }
export default DxxTable
