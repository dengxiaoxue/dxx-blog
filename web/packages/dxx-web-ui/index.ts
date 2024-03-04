import * as components from './src/components'

const install = (App: any) => {
  Object.entries({ ...components }).forEach(([name, component]) => {
    App.component(name, component);
  });
}

export default install

export * from './src/components'