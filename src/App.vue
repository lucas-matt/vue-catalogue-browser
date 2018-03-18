<template>
  <div id="app">
    <Navbar></Navbar>
    <CatView :catalogue="catalogue"/>
  </div>
</template>

<script>
import CatView from './components/CatView.vue';
import Navbar from './components/Navbar.vue';
import { sample } from './data/ExampleSource.js';

export default {
  name: 'app',
  components: {
    CatView,
    Navbar
  },
  data: () => {
      return {
          catalogue: sample
      }
  }
}
</script>

<style>

  html {
    height: 100%;
    margin: 0;
    background-size: cover  ;
    background: linear-gradient(150deg, slategrey, black);
    background-attachment: fixed;
  }

  body {
    margin: 0;
    height: 100%;
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
