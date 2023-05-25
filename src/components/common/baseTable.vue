<template>
  <div>
    <div style="margin: 20px">
      <el-button type="primary" v-for="btn in tableConfig.outButtons" @click="getBtnFunction(btn.click)">{{ btn.label }}</el-button>
    </div>
    <el-table :data="tableData.data" style="width: 100%">
      <el-table-column :prop="col.key" :label="col.label" v-for="col in columns" :key="col.key"> </el-table-column>
      <el-table-column header-align="center" align="center" label="操作" v-show="tableConfig.bodyButtons && tableConfig.bodyButtons.length">
        <template slot-scope="scope">
          <el-button type="primary" v-for="btn in tableConfig.bodyButtons" @click="getBtnFunction(btn.click, scope.row)">{{ btn.label }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5, 10, 15]"
      :total="tableData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import myTable from '@/utils/table.js'
export default {
  props: ['tableConfig'],
  data() {
    return {
      tableData: [],
      columns: [],
      // pages: {},
    }
  },
  watch: {
    tableConfig: {
      handler: async function (newVal, oldVal) {
        console.log(this.tableConfig)
        console.log(newVal, oldVal)
        if (oldVal) {
          let instance = new myTable(newVal, oldVal.data)
          await instance.requestData()
          this.tableData = instance.tableData
          this.columns = instance.columns
          // this.pages = {
          //   limit: instance.params.limit,
          //   offset: instance.params.offset,
          // }
          console.log(this.columns)
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      this.tableConfig.params[1].length = val
    },
    handleCurrentChange(val) {
      this.tableConfig.params[1].start = val
    },
    getBtnFunction(fn, row) {
      if (row) {
        fn(row)
      } else {
        fn()
      }
    },
  },
}
</script>

<style></style>
