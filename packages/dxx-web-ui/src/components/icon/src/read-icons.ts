const icons = import.meta.glob('./icons/svg/*.svg', { eager: true })
let iconList: any[] = []
Object.keys(icons).forEach((fileName) => {
  const name = fileName.replace(/\.\/|\.svg/g, '').replace(/icons\/svg\//, '')
  iconList.push(name)
})

export { iconList }
