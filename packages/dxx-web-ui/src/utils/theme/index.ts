import { ref, computed } from 'vue'

const currentTheme = ref('light')

const customThemeData = ref<any>({
  light: {},
  dark: {},
})
const globalThemeData = ref<any>({
  light: {},
  dark: {},
})

const globalThemeDataKey = 'dasTheme'
const themeClassPrefixKey = 'das-theme'

const pureThemeData = (ruleData: any) => {
  let res: any = {
    light: {},
    dark: {},
  }
  if (!ruleData) return res
  const { light, dark, ...data } = ruleData || {}
  res.light = light || {}
  res.dark = dark || {}
  for (const key in data) {
    const dataItem = data[key]
    if (typeof dataItem === 'string') {
      res.light[key] = dataItem
    }

    if (typeof dataItem === 'object') {
      for (const themeKey in dataItem) {
        res[themeKey][key] = dataItem[themeKey]
      }
    }
  }

  return res
}

function getDasThemeStyleSheet(type?: 'global' | 'custom') {
  const globalStyleId = `das-global-theme`
  const customStyleId = `das-custom-theme`

  if (!document.getElementById(customStyleId)) {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(''))
    style.setAttribute('id', customStyleId)
    document.head.appendChild(style)
  }
  if (!document.getElementById(globalStyleId)) {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(''))
    style.setAttribute('id', globalStyleId)
    document.head.appendChild(style)
  }

  if (!type) type = 'custom'
  let style: HTMLStyleElement = document.getElementById(customStyleId) as HTMLStyleElement
  if (type === 'global') style = document.getElementById(globalStyleId) as HTMLStyleElement
  return style.sheet as CSSStyleSheet
}

const setThemeRule = (data: any, type?: 'global' | 'custom') => {
  if (!type) type = 'custom'
  const sheet = getDasThemeStyleSheet(type)
  const themeData = pureThemeData(data)
  for (const themeKey in themeData) {
    const themeItem = themeData[themeKey]
    for (const themeRuleKey in themeItem) {
      const themeRule = themeItem[themeRuleKey]
      const className = `${themeClassPrefixKey}-${themeKey}`
      sheet.insertRule(`.${className} { ${themeRuleKey}:${themeRule} } `, sheet.cssRules.length)
    }

    if (type === 'global') {
      if (!globalThemeData.value[themeKey]) globalThemeData.value[themeKey] = {}
      globalThemeData.value[themeKey] = { ...globalThemeData.value[themeKey], ...themeItem }
    }

    if (type === 'custom') {
      if (!customThemeData.value[themeKey]) customThemeData.value[themeKey] = {}
      customThemeData.value[themeKey] = { ...customThemeData.value[themeKey], ...themeItem }
    }
  }

  const currentThemeClassName = `${themeClassPrefixKey}-${currentTheme.value}`
  if (document.body.classList.contains(currentThemeClassName)) return
  document.body.classList.add(currentThemeClassName)

  if (import.meta.hot) {
    import.meta.hot.send('das-fe:theme', data)
  }
}

const initTheme = async (opt?: any) => {
  // @ts-ignore
  const windowThemeData = window[globalThemeDataKey]

  if (windowThemeData) setThemeRule(windowThemeData, 'global')
  const themeGlob = opt?.theme?.glob
  if (themeGlob) {
    const data = Object.values(themeGlob)
      .map((item: any) => item.default)
      .filter((item) => !!item)
      .flat()

    for (const item of data) {
      setThemeRule(item)
    }
  }
}

const setTheme = (value: string) => {
  document.body.classList.add(`${themeClassPrefixKey}-light`)
  if (value === 'light') document.body.classList.remove(`${themeClassPrefixKey}-${currentTheme.value}`)
  currentTheme.value = value
  document.body.classList.add(`${themeClassPrefixKey}-${currentTheme.value}`)
}

/** 获取css var实际值 */
const getThemeRule = (key: string) => {
  return computed(() => {
    // console.log(customThemeData.value)
    return (
      globalThemeData.value?.[currentTheme.value]?.[key] || customThemeData.value?.[currentTheme.value]?.[key] || key
    )
  })
}

/** 获取css var字符串 */
const getVar = (key: string) => `var(${key})`

/** 获取css var实际值 */
const getVarValue = getThemeRule

export { initTheme, setTheme, getThemeRule, currentTheme, setThemeRule, getVar, getVarValue }
