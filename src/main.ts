import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapVue from 'bootstrap-vue';
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000/api';

export const bus = new Vue();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");



