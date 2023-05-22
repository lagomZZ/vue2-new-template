<template>
  <div id="app" :class="[`fillcontain`, `${theme}`]">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
//引入element自定义主题
import '@/style/element/theme-light/index.css'
import '@/style/element/theme-dark/index.css'
import '@/style/element/custom-theme/index.css'

export default {
  computed: {
    theme() {
      return store.state.currentTheme
    },
  },
}
</script>

<style lang="less">
@import './style/index.less';
</style>
