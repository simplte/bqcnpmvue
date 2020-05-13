import Vue from "vue";
import App from "./App.vue";
import bqcToast from "../packages/index";
Vue.use(bqcToast);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
