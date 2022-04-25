<template>
  <div>
    你好
  <div class="home">
    <header :style="{backgroundImage:`url(${require('../assets/img/header.png')})`}"></header>
  </div>
  </div>
</template>s

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>

<style scoped lang="scss">
@import "../assets/style/home/home";
</style>