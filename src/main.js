import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import Vuelazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(Vuelazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
