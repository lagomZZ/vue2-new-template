<template>
  <div class="fillcontain">
    <head-top></head-top>
    111
    <svg-icon icon-class="404" class-name="custom-class" />
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
