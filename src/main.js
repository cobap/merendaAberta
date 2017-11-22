// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app1',
  router,
  template: '<App/>',
  components: { App }
})
