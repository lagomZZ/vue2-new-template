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
