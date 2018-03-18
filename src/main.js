import Vue from 'vue'
import 'vue-awesome/icons'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false;

Vue.component('icon', Icon);

new Vue({
  render: h => h(App)
}).$mount('#app');
