<template>
  <div>
    <div class="home">
      <header :style="{backgroundImage:`url(${require('../assets/img/header.png')})`}"></header>
      <main>
        <section class="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref="divRef" class="chart">
            </div>
          </div>
        </section>
        <section class="section2"></section>
        <section class="section3"></section>
        <section class="section4"></section>
        <section class="section5"></section>
      </main>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

const px = (n) => n / 2420 * window.pageWidth;

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  mounted() {
    const divRef = this.$refs.divRef;
    let myChart = echarts.init(divRef);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: {show: false},
      legend: {show: false},
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    });
  }

}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
.chart{
  height: 50vh;
}
</style>