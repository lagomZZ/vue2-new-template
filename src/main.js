import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
// import ElementUI from 'element-ui'
import './icons' //svg
import * as echarts from 'echarts/core'
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'

import { BarChart, PieChart, RadarChart, LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { TitleComponent } from 'echarts/components'

import { LabelLayout } from 'echarts/features'

import myPlugins from './packages/index'

//fortawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faShirt } from '@fortawesome/free-solid-svg-icons'
library.add(faShirt)

//自动注册全局组件
import componentsList from '@/utils/componentsRegister'
Vue.use(componentsList)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(myPlugins)
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
  TitleComponent,
  RadarChart,
  PieChart,
  LabelLayout,
  LineChart,
])

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
