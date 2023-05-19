<template>
  <div id="app" :class="[`fillcontain`, `${theme}`]">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
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
