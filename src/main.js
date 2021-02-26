
import Vue from 'vue'
import App from './App'
import router from './router'
import './element'
import store from './vuex'
import './mock'
import axios from "axios";

//配置请求响应格式
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
