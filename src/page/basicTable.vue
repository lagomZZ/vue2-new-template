<template>
  <div>
    <textarea name="jsonInput" cols="80" rows="20" v-model="jsonInput"></textarea>
    <el-button type="primary" @click="genTable">预览</el-button>
    <base-table :tableConfig="tableConfig"></base-table>
  </div>
</template>

<script>
//后面考虑引入monaco editor
export default {
  data() {
    return {
      jsonInput: null,
      tableConfig: {},
    }
  },
  components: {},
  methods: {
    genTable() {
      //   console.log(typeof JSON.parse(this.jsonInput))
    },
  },
  mounted() {
    this.tableConfig = {
      url: 'api/ISV01/getDomain',
      //   url: 'shopping/v2/menu?restaurant_id=1',
      params: {
        deviceCode: '310211E01',
        limit: 10,
        offset: 0,
      },
      showIndex: false,
      sortBy: {
        value: 'createTime',
        direction: 'DESC',
      },
      outButtons: [
        {
          label: '查询',
          on: { click: function () {} },
        },
      ],
      bodyButtons: [
        {
          label: '添加',
          on: { click: function () {} },
        },
      ],
      columns: [
        {
          key: 'id',
          label: '规则编号',
          type: 'text',
          bind: function (row) {},
        },
      ],
    }
  },
}
</script>

<style></style>
