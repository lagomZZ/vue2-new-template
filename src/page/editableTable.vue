<template>
  <div>
    <el-button class="add-props" @click="addProps()">添加</el-button>

    <el-table :data="propsList" style="width: 100%">
      <el-table-column prop="attrName" label="属性名称" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['attrName']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.attrName }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="属性id" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['id']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.id }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="attrValue" label="属性值" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['attrValue']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.attrValue }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="sortNo" label="展示序号" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['sortNo']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.sortNo }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="添加用户" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['user']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.user }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="addTime" label="添加时间" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['addTime']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.addTime }}
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="editTime" label="修改时间" width="width" header-align="center" align="center">
        <template slot-scope="scope">
          <el-input v-model="editableData[scope.row.key]['editTime']" v-if="editableData[scope.row.key]"></el-input>
          <template v-else>
            {{ scope.row.editTime }}
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="width" header-align="center">
        <template slot-scope="scope"
          ><div class="operation">
            <template v-if="editableData[scope.row.key]">
              <div class="check" @click="save(scope.row.key)">保存</div>
              <div class="check" @click="cancel(scope.row.key)">取消</div>
            </template>
            <template v-else>
              <div class="check" @click="editProps(scope.row.key)">编辑</div>
              <div class="check" @click="deleteProps(scope.row.key)">删除</div>
            </template>
          </div></template
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  methods: {
    initDeviceInfo() {
      if (!this.innerDeviceCode) {
        this.innerDeviceCode = getCurrentNodeId()
      }
      const params = {
        deviceCode: this.innerDeviceCode,
      }
      findDeviceByDeviceCode(params).then((res) => {
        if (res.status !== 200 || res.data.code !== 200) {
          this.$message.error('获取设备信息出错，请重试')
          // this.deviceInfo = this.mockDeviceInfo
        }
        this.deviceInfo = res.data.result
      })
    },
    editProps(key) {
      this.$set(this.editableData, key, _.cloneDeep(this.propsList.filter((item) => key === item.key)[0]))
    },
    deleteProps(key) {
      const index = this.propsList.findIndex((item) => key === item.key)
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(() => {
          this.$delete(this.propsList, index)
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    save(key) {
      Object.assign(this.propsList.filter((item) => key === item.key)[0], this.editableData[key])
      this.$delete(this.editableData, key)
    },
    cancel(key) {
      this.$delete(this.editableData, key)
    },
    addProps() {
      const newData = { key: Date.now(), attrName: '', attrValue: '', sortNo: '', user: '', addTime: '', editTime: '' }
      this.propsList.push(newData)
      this.editProps(newData.key)
    },
  },

  data() {
    return {
      propsList: [
        { key: Date.now(), attrName: '补油日期', id: 1, attrValue: 1.2, sortNo: 1, user: 'admin', addTime: '2023-1-1', editTime: '2023-1-1' },
      ],
      editableData: {},
    }
  },
}
</script>

<style></style>
