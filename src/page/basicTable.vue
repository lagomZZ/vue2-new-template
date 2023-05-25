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
      //   url: 'app/ISV01/getDomain',
      url: 'api/rest/post/testingSpecialtyService/findbySpecialty',
      //   url: 'shopping/v2/menu?restaurant_id=1',
      params: [
        {
          code: '',
          name: '',
          desc: '',
        },
        {
          start: 0,
          length: 10,
          statCount: true,
        },
      ],
      showIndex: false,
      sortBy: {
        value: 'createTime',
        direction: 'DESC',
      },
      outButtons: [
        {
          label: '查询',
          click: function () {
            console.log('11')
          },
        },
      ],
      bodyButtons: [
        {
          label: '删除',
          click: function (row) {
            alert(`可以获取该行信息 ${row.id}`)
            console.log(row)
          },
        },
      ],
      columns: [
        {
          key: 'code',
          label: '检测专业编码',
          type: 'text',
          bind: function (row) {},
        },
        {
          key: 'name',
          label: '检测专业名称',
          type: 'text',
          bind: function (row) {},
        },
        {
          key: 'parentName',
          label: '父级名称',
          type: 'text',
          bind: function (row) {},
        },
        {
          key: 'parentId',
          label: '父级编码',
          type: 'text',
          bind: function (row) {},
        },
      ],
    }
  },
}
</script>

<style></style>
