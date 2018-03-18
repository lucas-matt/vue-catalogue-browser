<template>
  <div id="app">
    <div class="catalogues">
      <CatRow :catalogue="catalogue"/>
    </div>
  </div>
</template>

<script>
import CatRow from './components/CatRow.vue';
import { sample } from './data/ExampleSource.js';

export default {
  name: 'app',
  components: {
    CatRow
  },
  data: () => {
      console.log(sample);
      return {
          catalogue: sample.catalogues[0]
      }
  }
}
</script>

<style>

  body {
    margin: 0;
    background: linear-gradient(135deg, slategrey, black);
  }

  .catalogues {
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
