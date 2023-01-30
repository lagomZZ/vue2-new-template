<template>
    <div class="visitorPie">
        <Echart :options="optionPie" class="h-100 w-100"></Echart>
    </div>
</template>

<script>
import Echart from './common/echart.vue'
export default {
    data() {
        return {
            optionPie: {},
        }
    },
    components: { Echart },
    props: ['pieData'],
    watch: {
        pieData(newVal) {
            if (!newVal || newVal.length == 0) return {}
            this.optionPie = {
                title: {
                    text: '用户分布',
                    subtext: '',
                    x: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['北京', '上海', '深圳', '杭州', '其他'],
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: this.pieData.beijing, name: '北京' },
                            { value: this.pieData.shanghai, name: '上海' },
                            { value: this.pieData.shenzhen, name: '深圳' },
                            { value: this.pieData.hangzhou, name: '杭州' },
                            { value: this.pieData.qita, name: '其他' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            }
        },
    },
}
</script>

<style scoped>
.visitorPie {
}
</style>
