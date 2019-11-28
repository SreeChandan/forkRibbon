<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ForkRibbon mode="both" :fixed_="false" forkLink="https://github.com/SreeChandan/forkRibbon" />
    <div style="width:100px; height:2000px;"></div>
  </div>
</template>

<script>
import ForkRibbon from "./components/ForkRibbon.vue";

export default {
  name: "app",
  components: {
    ForkRibbon
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
body {
  margin: 0;
  /*overflow-x: hidden;*/
}
</style>
