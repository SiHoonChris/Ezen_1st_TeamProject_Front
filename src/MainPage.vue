<template>
  <div>
    <header-comp/>
    <router-view/>
    <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  components: { HeaderComp, FooterComp }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
