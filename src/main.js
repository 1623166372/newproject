// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import  axios from 'axios'
Vue.prototype.$axios = axios;
import $ from 'jquery'
Vue.config.productionTip = false
//将路由实例挂在到id为app的div上才可以使用

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
