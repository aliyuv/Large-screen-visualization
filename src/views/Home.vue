<template>
  <div>
    <div class="home">
      <header :style="{backgroundImage:`url(${require('../assets/img/header.png')})`}"></header>
      <main>
        <section class="section1">
          <chart1/>
        </section>

        <section class="section2"></section>
        <section class="section3"></section>
      </main>
    </div>
  </div>
</template>

<script>

import chart1 from "@/components/chart-1";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {chart1}
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>