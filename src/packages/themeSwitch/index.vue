<template>
  <div class="theme-wrap">
    <el-popover placement="top-start" trigger="click">
      <div id="theme">
        <el-radio-group v-model="theme" class="d-flex jc-center">
          <el-radio-button v-for="label in labelArr" :label="label">{{ '' }}</el-radio-button>
        </el-radio-group>
      </div>
      <el-button slot="reference" style="border: unset; background: transparent"
        ><font-awesome-icon icon="fa-solid fa-shirt" class="themeIcon"
      /></el-button>
    </el-popover>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'themeSwitch',
  data() {
    return {
      theme: store.state.currentTheme || 'theme-light',
    }
  },
  watch: {
    theme(newVal, oldVal) {
      store.commit('SET_CURRENT_THEME', this.theme)
    },
  },

  props: ['labelArr'],
}
</script>
<style lang="less" scoped>
@first-color: #3088f4;
@second-color: #185a9b;
.theme-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

#theme /deep/ .el-radio-button .el-radio-button__inner {
  border-radius: 5px;
  width: 50px;
  height: 50px;
  color: #fff;
}
#theme /deep/ .el-radio-button {
  /* width: 50%; */
  margin-left: 5px;
}

#theme /deep/ .el-radio-group label:nth-child(1) span {
  background: @first-color;
  border-color: @first-color;
  box-shadow: @first-color -1px 0px 0px 0px;
}
#theme /deep/ .el-radio-group label:nth-child(2) span {
  background: @second-color;
  border-color: @second-color;
  box-shadow: @second-color -1px 0px 0px 0px;
}

.themeIcon {
  color: #7bb7ee;
  width: 20px;
  height: 20px;
}
.jc-center {
  justify-content: center;
}
.d-flex {
  display: flex;
}
</style>
