import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueToastr2 from 'vue-toastr-2';


import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

window.toastr = require('toastr');
Vue.use(VueToastr2);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
