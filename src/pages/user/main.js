import Vue from "vue";
import App from "./user.vue";
import router from "./router";
import store from "./store";

console.log("user");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
