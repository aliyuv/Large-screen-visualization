<template>
  <div class="bordered 管辖统计">
    <h2>案件破获排名</h2>
    <div ref=divRef class="chart">

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {baseEchartOptions} from "@/shared/base-echart-options";
import {createEchartsOptions} from "@/shared/create-echarts-options";
// import {px} from "@/shared/px";

export default {
  name: "chart-2",
  mounted() {
    let myChart = echarts.init(this.$refs.divRef);

    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }));
  }
}
</script>

<style scoped>

</style>