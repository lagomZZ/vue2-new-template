import themeSwitch from './themeSwitch'
const components = [themeSwitch]
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
}
