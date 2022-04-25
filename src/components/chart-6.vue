<template>
  <div class="bordered 籍贯">
    <h2>全市犯罪人员籍贯分布地</h2>
    <div class="wrapper">
      <div ref="divRef" class="chart"/>
      <div class="legend bordered">
        <span class="icon" :style="{background:colors['甘肃省']}"/>甘岭籍
        <span class="icon" :style="{background:colors['四川省']}"/>边城籍
        <span class="icon" :style="{background:colors['青海省']}"/>寒国籍
      </div>
      <div className="notes">此地图仅显示了中国的部分区域</div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {createEchartsOptions} from '@/shared/create-echarts-options';
import china from '@/static/china.json';

export default {
  name: "chart-6",
  data() {
    return {
      colors: {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'}
    }
  },
  mounted() {
    const myChart = echarts.init(this.$refs.divRef);
    echarts.registerMap('CN', china);

    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '甘肃省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: this.colors['甘肃省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: this.colors['四川省'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: this.colors['青海省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
      ]
    }));
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>