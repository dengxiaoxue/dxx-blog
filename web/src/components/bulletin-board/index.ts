import { ref } from 'vue'
import BulletinBoard from './src/index.vue'

const DxxBulletinBoardRef = () => ref<InstanceType<typeof BulletinBoard> | null>(null)

const DxxBulletinBoard = BulletinBoard

export * from './src/type.sfc'
export { DxxBulletinBoard, DxxBulletinBoardRef }
export default DxxBulletinBoard
