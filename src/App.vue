<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from '@/views/Home'

export default {
  name: 'App',
  components: {Home}

}
</script>

<style>
#app{
  margin: 0 auto;
  background: lightgreen;
}
</style>
