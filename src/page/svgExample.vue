<template>
  <div class="fillcontain">
    <head-top></head-top>
    <svg-icon icon-class="password" class-name="password" />
  </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
  name: 'svgExample',
  components: { headTop },
}
</script>

<style lang="less">
@import '../style/mixin';
</style>
