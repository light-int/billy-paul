import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vueSmoothScroll from 'vue2-smooth-scroll'
import loader from "vue-ui-preloader";

Vue.use(loader);
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
