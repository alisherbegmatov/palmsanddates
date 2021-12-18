require('dotenv').config();

import Vue from 'vue';
import Scrollspy from 'vue2-scrollspy';
import { customAxios } from './axios.config';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

var VueScrollTo = require('vue-scrollto');
Vue.config.productionTip = false;

import '@/assets/scss/style.scss';
import '@/assets/css/general.css';

Vue.use(Scrollspy);
Vue.use(VueScrollTo);
Vue.use(VueAxios, customAxios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
