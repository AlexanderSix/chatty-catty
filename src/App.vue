<template>
  <div id="app">
    <!-- This is where things that belong on every page go (navbar, logo, etc) -->
    <img src="./assets/logo.png">

    <!-- Router-view is where the components will get swapped in when
    we navigate around the application -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
