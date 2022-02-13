import Vue from "vue";
import App from "./App.vue";
import "./assets/base.css";
import "./plugin/vant";
import store from "./store/index";
import router from "./route/index.js";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
