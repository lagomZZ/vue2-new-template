<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="label" label="名称"> </el-table-column>
      <el-table-column prop="layer" label="层数"> </el-table-column>
      <el-table-column prop="id" label="id"> </el-table-column>
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next, jumper" :page-sizes="[5, 10, 20, 30]" :total="tableData.length"> </el-pagination>
  </div>
</template>

<script>
import myTable from '@/utils/table.js'
export default {
  props: ['tableConfig'],
  data() {
    return {
      tableData: [],
    }
  },
  watch: {
    tableConfig: {
      handler: async function (newVal, oldVal) {
        if (oldVal) {
          let instance = new myTable(newVal, oldVal.data)
          await instance.requestData()
          this.tableData = instance.tableData
          console.log(this.tableData)
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {},
}
</script>

<style></style>
