import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import BreadcrumbItem from './src/index.vue'

const DxxBreadcrumbItemRef = () => ref<InstanceType<typeof BreadcrumbItem> | null>(null)

const DxxBreadcrumbItem = withInstall(BreadcrumbItem)

export { DxxBreadcrumbItem, DxxBreadcrumbItemRef }
export default DxxBreadcrumbItem
