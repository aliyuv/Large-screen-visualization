<template>
  <div class="年龄段-图1">
    <div class="chart">
      <div class="main" ref="divRef"/>
      <div class="text">性别</div>
    </div>
    <div class="legend">
      <span class="male"/>男
      <span class="female"/>女
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {createEchartsOptions} from '@/shared/create-echarts-options';
import {px} from '@/shared/px';

export default {
  name: "chart-7",
  mounted() {
    const myChart = echarts.init(this.$refs.divRef);
    myChart.setOption(createEchartsOptions({
      color: ['#8D70F8', '#33A4FA'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.2, name: '女'},
            {value: 0.8, name: '男'},
          ]
        }
      ]
    }));
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>