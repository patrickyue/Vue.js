import Vue from 'vue'
import App from './App.vue'

import store from './store';

import {currency} from './filters/currency';

Vue.config.productionTip = false

Vue.filter('currency', currency);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
