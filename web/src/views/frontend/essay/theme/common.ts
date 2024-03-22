export default {
  '--essay-bg': {
    light: 'rgb(233, 240, 240)',
    dark: '#2d2d2d',
  },
  '--essay-color': {
    light: '#4a4a4a',
    dark: '#fff',
  },
  '--essay-title': {
    light: '#485fc7',
    dark: '#424d7f',
  },
  '--essay-text-grey': {
    light: '#777777',
    dark: '#d8d8d8',
  },
  '--essay-item-bg': {
    light: `linear-gradient(
      150deg,
      hsl(200, calc(20 * 1%), min(calc(64 * 1% + 10%), 100%)) 15%,
      #d6d5d5 70%,
      hsl(200, calc(21 * 1%), max(calc(62 * 1.4% - 2.5%), 0%)) 95%
    )`,
    dark: `linear-gradient(
      150deg,
      hsl(0, calc(20 * 0%), min(calc(54 * 1% + 10%), 100%)) 15%,
      #55554e 70%,
      hsl(50, calc(31 * 0%), max(calc(44 * 1.4% - 2.5%), 0%)) 95%
    )`,
  },
}
