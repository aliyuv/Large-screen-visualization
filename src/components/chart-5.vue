<template>
  <div class="战果">
    <h2>往年战果数对比</h2>
    <table>
      <thead>
      <tr>
        <th>年份</th>
        <th>破案数</th>
        <th>抓获嫌疑人</th>
        <th>并串案件</th>
        <th>现勘录入</th>
        <th>视侦录入</th>
        <th>合成案件数</th>
        <th>合计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>2015</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      <tr>
        <td>2016</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      <tr>
        <td>2017</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {createEchartsOptions} from '@/shared/create-echarts-options';
import {px} from '@/shared/px';

export default {
  name: "chart-5",
  mounted() {
    const myChart = echarts.init(this.$refs.divRef);
    myChart.setOption(createEchartsOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        name: '故意伤人',
        type: 'line',
        data: [
          0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>