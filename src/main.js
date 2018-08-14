// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import './mock/mockServer'
new Vue({
  el: '#app',
  render: h => h(App),
  router,// 配置路由器
  store
})
