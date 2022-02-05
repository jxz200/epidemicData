import Vue from "vue";
import App from "./App.vue";
import "./assets/base.css";
import { Button } from "vant";
import store from "./store/index";

Vue.use(Button);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
