import { ref } from 'vue'
import { withInstall } from '../../utils/index'
import Breadcrumb from './src/index.vue'

const DxxBreadcrumbRef = () => ref<InstanceType<typeof Breadcrumb> | null>(null)

const DxxBreadcrumb = withInstall(Breadcrumb)

export { DxxBreadcrumb, DxxBreadcrumbRef }
export default DxxBreadcrumb
