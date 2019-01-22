import Vue from "vue";
import router from "./router";
import store from "./store";
import main from "./main.vue";
// import axios from "@/components/tools.js";

Vue.config.productionTip = false;
console.log("index");
new Vue({
  router,
  store,
  render: h => h(main)
}).$mount("#app");
