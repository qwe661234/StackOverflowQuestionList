import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import App from "./App.vue";

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
