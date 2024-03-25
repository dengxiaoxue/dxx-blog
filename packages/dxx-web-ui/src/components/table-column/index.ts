import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import TableColumn from './src/index.vue'

const DxxTableColumnRef = () => ref<InstanceType<typeof TableColumn> | null>(null)

const DxxTableColumn = withInstall(TableColumn)

export { DxxTableColumn, DxxTableColumnRef }
export default DxxTableColumn
