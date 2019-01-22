import Vue from "vue";
import App from "./welcome.vue";

console.log("welcome");

new Vue({
  render: h => h(App)
}).$mount("#app");
