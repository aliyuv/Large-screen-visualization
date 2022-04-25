<template>
  <div>
    <div class="home">
      <header :style="{backgroundImage:`url(${require('../assets/img/header.png')})`}"></header>
      <main>
        <section class="section1">
          <chart1/>
          <chart2/>
        </section>
        <section class="bordered section2">
          <chart3 class="mb"/>
          <chart4/>
        </section>
        <section class="bordered section3">
          <chart5/>
        </section>
        <section class="bordered section4">
          <chart6/>
          <div class="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div class="charts">
              <chart7 class="mb"/>
              <chart8/>
              <chart9/>
            </div>
          </div>
        </section>
        <section class="bordered section5">
          <div class="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div class="charts">
              <chart10/>
              <chart11/>
            </div>
          </div>
        </section>
      </main>
      <footer>
        &copy; By Aliyu 2017-{{ new Date().getFullYear() }}
      </footer>
    </div>
  </div>
</template>

<script>

import chart1 from "@/components/chart-1";
import chart2 from "@/components/chart-2";
import chart3 from "@/components/chart-3";
import chart4 from "@/components/chart-4";
import chart5 from "@/components/chart-5";
import chart6 from "@/components/chart-6";
import chart7 from "@/components/chart-7";
import chart8 from "@/components/chart-8";
import chart9 from "@/components/chart-9";
import chart10 from "@/components/chart-10";
import chart11 from "@/components/chart-11";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {chart1, chart2, chart3, chart4, chart5, chart6, chart7, chart8, chart9, chart10, chart11}
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";

.mb {
  margin-bottom: 10px;
}
</style>