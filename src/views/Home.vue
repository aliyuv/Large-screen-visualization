<template>
  <div>
    <div class="home">
      <header :style="{backgroundImage:`url(${require('../assets/img/header.png')})`}"></header>
      <main>
        <section class="section1">
          <chart1 class="chart1"/>
          <chart2 class="chart2"/>
        </section>
        <section class="bordered section2">
          <chart3/>
          <chart4/>
        </section>
        <section className="bordered section3">

        </section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
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

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {chart1, chart2, chart3, chart4}
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";

.chart1 {
  margin-bottom: 10px;
}
</style>