export default {
  '--msg-c-bg': {
    light: '#fff',
    dark: 'rgba(255, 255, 255, 0.1)',
  },
  '--msg-reply-bg': {
    light: '#f8f8f8',
    dark: `linear-gradient(
      150deg,
      hsl(0, calc(20 * 0%), min(calc(1 * 1% + 10%), 100%)) 0%,
      #0f0f0f 20%,
      hsl(50, calc(31 * 0%), max(calc(1 * 1.4% - 2.5%), 0%)) 100%
    )`,
  },
  '--msg-reply-shadow': {
    light: 'inset 0 2px 10px rgba(0, 0, 0, 0.35), 20px 20px 20px rgba(255, 255, 255, 0.5)',
    dark: 'inset 0 2px 10px rgba(0, 0, 0, 0.35), 20px 20px 20px rgba(255, 255, 255, 0.5)',
  },
  '--msg-border-radius': '12px',
  // 以下为copy过来的
  '--box-shadow': {
    light: '0 7px 20px 1px #d7ceff30',
    dark: '0 7px 20px 1px #d7ceff30',
  },
  '--radius': '0.5rem',
  '--colorE': {
    light: 'rgb(12 25 50 / 60%)',
    dark: '#fff',
  },
  '--main': {
    light: 'rgb(12 25 50)',
    dark: '#fff',
  },
  '--colorF': {
    light: 'rgb(12 25 50 / 70%)',
    dark: '#fff',
  },
  '--theme-10': 'ff6a6a1a',
}
