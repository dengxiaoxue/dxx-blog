import { ref } from 'vue'
import ArticleCard from './src/index.vue'

const DxxArticleCardRef = () => ref<InstanceType<typeof ArticleCard> | null>(null)

const DxxArticleCard = ArticleCard

export * from './src/type.sfc'
export { DxxArticleCard, DxxArticleCardRef }
export default DxxArticleCard
