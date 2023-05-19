<template>
  <div class="theme-wrap">
    <el-popover placement="top-start" width="200" trigger="click">
      <div id="theme">
        <el-radio-group v-model="theme" class="d-flex jc-center">
          <el-radio-button label="theme-light">{{ '' }}</el-radio-button>
          <el-radio-button label="theme-dark">{{ '' }}</el-radio-button>
          <el-radio-button label="theme-blue">{{ '' }}</el-radio-button>
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

  props: ['colorArr', 'labelArr'],
}
</script>
<style scoped>
.theme-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

#theme >>> .el-radio-button .el-radio-button__inner {
  border-radius: 5px;
  width: 50px;
  height: 50px;
  color: #fff;
}
#theme >>> .el-radio-button {
  /* width: 50%; */
  margin-left: 5px;
}

#theme >>> .el-radio-group label:nth-child(1) span {
  background: #3088f4;
}
#theme >>> .el-radio-group label:nth-child(2) span {
  background: #3cd3a6;
  border-color: #3cd3a6;
  box-shadow: #3cd3a6 -1px 0px 0px 0px;
}
#theme >>> .el-radio-group label:nth-child(3) span {
  background: #185a9b;
  border-color: #185a9b;
  box-shadow: #185a9b -1px 0px 0px 0px;
}
#theme ::v-deep .el-radio-group label:nth-child(4) span {
  background: #eff4ab;
  border-color: #eff4ab;
  box-shadow: #eff4ab -1px 0px 0px 0px;
}

.themeIcon {
  color: #7bb7ee;
  width: 20px;
  height: 20px;
}
</style>
