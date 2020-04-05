import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


import '../src/assets/styles/reset.scss'
import '../src/assets/styles/iconfont.scss'
import "../src/assets/styles/override-element-ui.scss" // 饿了么样式覆盖

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
