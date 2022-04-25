<template>
  <div class="bordered 破获排名">
    <h2>案件破获排名</h2>
    <div ref="divRef" class="chart"/>

    <div class="legend">
      <span class="first"/> 破案排名1
      <span class="second"/> 破案排名2
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {createEchartsOptions} from "@/shared/create-echarts-options";


export default {
  name: "chart-2",
  methods: {
    x(data) {
      const divRef = this.$refs.divRef;
      let myChart = echarts.init(divRef);
      myChart.setOption(createEchartsOptions({
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: {show: false},
          axisLabel: {show: false}
        },
        yAxis: {
          axisTick: {show: false},
          type: 'category',
          data: data.map(i => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局');
            }
          }
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: data.map(i => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#2034F9'
                }, {
                  offset: 1,
                  color: '#04A1FF'
                }]),
              }
            }
          },
          {
            name: '2012年',
            type: 'bar',
            data: data.map(i => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#B92AE8'
                }, {
                  offset: 1,
                  color: '#6773E7'
                }]),
              }
            }
          }
        ]
      }));
    }
  },
  mounted() {
    setInterval(() => {
      const newData = [
        {name: '城关区公安局', 2011: 2, 2012: Math.random() * 10},
        {name: '七里河区公安局', 2011: 2, 2012: 3},
        {name: '西固区公安局', 2011: 2, 2012: 3},
        {name: '安宁区公安局', 2011: 2, 2012: 3},
        {name: '红古区公安局', 2011: 2, 2012: 3},
        {name: '永登县公安局', 2011: 2, 2012: 3},
        {name: '皋兰县公安局', 2011: 2, 2012: 3},
        {name: '榆中县公安局', 2011: 2, 2012: 3},
        {name: '新区公安局', 2011: 2, 2012: 3},
      ];
      this.x(newData);
    }, 1000);
    this.myChart = echarts.init(this.$refs.divRef);
    this.x(this.dataD);
  },
  data() {
    return {
      dataD: [
        {name: '城关区公安局', 2011: 2, 2012: 3},
        {name: '七里河区公安局', 2011: 2, 2012: 3},
        {name: '西固区公安局', 2011: 2, 2012: 3},
        {name: '安宁区公安局', 2011: 2, 2012: 3},
        {name: '红古区公安局', 2011: 2, 2012: 3},
        {name: '永登县公安局', 2011: 2, 2012: 3},
        {name: '皋兰县公安局', 2011: 2, 2012: 3},
        {name: '榆中县公安局', 2011: 2, 2012: 3},
        {name: '新区公安局', 2011: 2, 2012: 3},
      ]
    }
  }
}
</script>

<style scoped>
.chart {
  width: 30vh;
  height: 30vh;
}
</style>