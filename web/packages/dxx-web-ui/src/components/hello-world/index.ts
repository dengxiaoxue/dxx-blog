import { ref } from "vue";
import { withInstall } from '../../utils/index'
import HelloWorld from './src/index.vue'

const DxxHelloWorldRef = () => ref<InstanceType<typeof HelloWorld> | null>(null)

const DxxHelloWorld = withInstall(HelloWorld)

export { DxxHelloWorld, DxxHelloWorldRef }
export default DxxHelloWorld