<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%">
      <el-col :span="4" style="min-height: 100%; background-color: #324057">
        <el-menu :default-active="defaultActive" style="min-height: 100%" router text-color="#f5f5f5" background-color="#324057">
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-menu-item index="monitor"><i class="el-icon-menu"></i>大屏</el-menu-item>

          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
            <el-menu-item index="addShop">基础表单</el-menu-item>
            <el-menu-item index="foodList">基础列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>公共组件</template>
            <el-menu-item index="visitor">echart组件</el-menu-item>
            <el-menu-item index="svgExample">svg组件</el-menu-item>
            <el-menu-item index="basicTable">表格基础组件</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-edit"></i>编辑</template>
            <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%; overflow: auto">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    },
  },
}
</script>

<style lang="less" scoped>
@import '../style/mixin';
.manage_page {
}

.el-menu {
  background: transparent;
}
</style>
