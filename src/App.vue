<template>
  <div id="app">
    <Navbar></Navbar>
    <CatView :catalogues="catalogues"/>
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
          catalogues: sample
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

  .swal-modal {
    background: linear-gradient(150deg, white, slategrey);
  }

  .swal-footer {
    clear: both;
  }

  .swal-content {
    font-size: small;
  }

.tabs-component {
  margin: 0em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 1px rgba(255, 255, 255, 0.2);
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 2em 2em;
  }
}

</style>
