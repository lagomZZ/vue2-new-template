<template>
  <div>
    <theme-switch :labelArr="['theme-light', 'theme-dark']"></theme-switch>
    <visitor-pie :pieData="pieData"></visitor-pie>
    <el-date-picker v-model="start" type="date" placeholder="date"></el-date-picker>
    <el-button type="primary"></el-button>
  </div>
</template>

<script>
import visitorPie from '@/components/visitorPie'
import { getUserCity } from '@/api/getData'
export default {
  data() {
    return {
      pieData: {},
      start: null,
    }
  },
  components: {
    visitorPie,
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      try {
        const res = await getUserCity()
        if (res.status == 1) {
          this.pieData = res.user_city
        } else {
          throw new Error(res)
        }
      } catch (err) {
        console.log('获取用户分布信息失败', err)
      }
    },
  },
}
</script>

<style scoped>
/* .number {
  color: aqua;
} */
</style>
