import Vue from 'vue'
import 'vue-awesome/icons'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'
import VueSwal from 'vue-swal'

Vue.config.productionTip = false;

Vue.component('icon', Icon);
Vue.use(VueSwal);

new Vue({
  render: h => h(App)
}).$mount('#app');
