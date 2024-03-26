import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Pagination from './src/index.vue'

const DxxPaginationRef = () => ref<InstanceType<typeof Pagination> | null>(null)

const DxxPagination = withInstall(Pagination)

export { DxxPagination, DxxPaginationRef }
export default DxxPagination
