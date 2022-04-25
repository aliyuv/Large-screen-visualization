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
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  </div>
</template>

<script>

import chart1 from "@/components/chart-1";
import chart2 from "@/components/chart-2";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {chart1, chart2}
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>