<template>
  <div id="app">
    <CatView :catalogue="catalogue"/>
  </div>
</template>

<script>
import CatView from './components/CatView.vue';
import { sample } from './data/ExampleSource.js';

export default {
  name: 'app',
  components: {
    CatView
  },
  data: () => {
      return {
          catalogue: sample
      }
  }
}
</script>

<style>

  body {
    margin: 0;
    background: linear-gradient(135deg, slategrey, black);
  }

  .catrow {
    margin-top: 2%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100vh;
  }

</style>
