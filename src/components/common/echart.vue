<template>
  <div ref="chartContainer">
    <div ref="Chart" :style="{ height: height, width: width }" class="chart"></div>

    <!-- <div v-show="!options" class="no-data">暂无数据</div> -->
  </div>
</template>

<script>
import '@/style/theme/theme-dark.js'
import '@/style/theme/theme-light.js'
import store from '@/store'
const elementResizeDetectorMaker = require('element-resize-detector')
const erd = elementResizeDetectorMaker()
export default {
  data() {
    return {
      chart: null,
    }
  },
  computed: {
    theme() {
      return store.state.currentTheme
    },
  },
  mounted() {
    this.initChart()

    // window.addEventListener('resize', () => {
    //   this.chart.resize()
    // })
    erd.listenTo(this.$refs.chartContainer, () => {
      this.chart && this.chart.resize()
      console.log('resize')
      this.$emit('fontResize')
    })
  },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
  },
  watch: {
    options: {
      handler(options) {
        this.setOption(options)
      },
      deep: true,
    },
    theme(newVal, oldVal) {
      // this.$emit('updateConfig')
      this.chart && this.chart.dispose()
      this.chart = this.$echarts.init(this.$refs.Chart, this.theme)
      this.setOption(this.options)
    },
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.Chart, this.theme)
      this.$emit('getInstance', this.chart)
    },
    setOption(options) {
      if (!options) {
        this.chart && this.chart.clear()
        return
      }
      this.chart && this.chart.setOption(options, true)
    },
  },
  beforeDestroy() {
    this.chart && this.chart.clear() && this.chart.dispose()
    this.chart = null
    erd.uninstall(this.$refs.chartContainer)
  },
}
</script>

<style scoped>
.chart {
  margin: 0 auto;
  width: 300px;
  height: 220px;
}
</style>
