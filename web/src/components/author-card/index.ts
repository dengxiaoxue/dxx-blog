import { ref } from 'vue'
import AuthorCard from './src/index.vue'

const DxxAuthorCardRef = () => ref<InstanceType<typeof AuthorCard> | null>(null)

const DxxAuthorCard = AuthorCard

export * from './src/type.sfc'
export { DxxAuthorCard, DxxAuthorCardRef }
export default DxxAuthorCard
