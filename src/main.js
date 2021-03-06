import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//
import http from '@/api/config.js'
import './mock/index.js'
Vue.use(ElementUI)
Vue.use(Antd);
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
