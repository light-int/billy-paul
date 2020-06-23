import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
