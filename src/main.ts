import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000/';


Vue.use(VueGoogleMaps, {
  key: 'AIzaSyCuIxiRvY67GRf63TqamI10ys_ggmw-zNk',
    libraries: 'places',
    autobindAllEvents: true,
  
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");



