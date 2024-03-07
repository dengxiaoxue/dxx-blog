import { ref, computed, reactive } from 'vue'
const customLangeData: any = reactive({})
const globalLangeData: any = reactive({})

const currentLang = ref('zh-CN')
const globalI18nDataKey = 'dasI18n'

const setI18nRule = (data: any, type?: 'global' | 'custom') => {
  const isGlobal = type === 'global'
  const isCustom = !isGlobal

  for (const key in data) {
    if (isGlobal) globalLangeData[key] = data[key]
    if (isCustom) customLangeData[key] = data[key]
  }

  if (import.meta.hot) {
    import.meta.hot.send('das-fe:i18n', { ...customLangeData, ...globalLangeData })
  }
}

const initI18n = async (opt?: any) => {
  // @ts-ignore
  const globalI18nData = window[globalI18nDataKey]

  if (globalI18nData) setI18nRule(globalI18nData, 'global')

  const i18nGlob = opt?.i18n?.glob

  if (i18nGlob) {
    const data = Object.values(i18nGlob)
      .map((item: any) => item.default)
      .filter((item) => !!item)
      .flat()

    for (const item of data) {
      setI18nRule(item)
    }
  }
}

/**
 * 获取国际化键名对应的文本
 * @param key 国际化对象键名
 * @param args 插值替换的剩余参数，多个插值使用,隔开
 * @returns string
 */
const getI18nRule = (key: string, ...args: any[]) => {
  return computed(() => {
    const ruleItem = globalLangeData[key] || customLangeData[key] || key
    if (ruleItem === key) return key

    let text: string = ruleItem[currentLang.value]
    args.map((item, index) => {
      text = text.replace(`$${index}`, item)
    })
    return text
  })
}

const i18n = getI18nRule

/**
 * 在模版中使用t函数可以省略.value
 * @param key 国际化对象键名
 * @param args 插值替换的剩余参数，多个插值使用,隔开
 * @returns string
 */
const t = (key: string, ...args: any) => i18n(key, ...args).value

const setLang = (lang: string) => {
  currentLang.value = lang
}

const getLang = () => currentLang

export { initI18n, setI18nRule, getI18nRule, i18n, t, setLang, getLang, currentLang }
