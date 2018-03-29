import Vue from 'vue'
import 'vue-awesome/icons'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'
import VueSwal from 'vue-swal'
import {Tabs, Tab} from 'vue-tabs-component'

Vue.config.productionTip = false;

Vue.component('icon', Icon);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
Vue.use(VueSwal);

new Vue({
  render: h => h(App)
}).$mount('#app');
