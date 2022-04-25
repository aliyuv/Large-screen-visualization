<template>
  <div>
  <div class="home">
    <header :style="{backgroundImage:`url(${require('../assets/img/header.png')})`}"></header>
    <main>
      <section class="section1"></section>
      <section class="section2"></section>
      <section class="section3"></section>
      <section class="section4"></section>
      <section class="section5"></section>
    </main>
  </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>