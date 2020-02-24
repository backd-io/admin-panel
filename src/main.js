import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Buefy from 'buefy'

import './assets/style.scss'
import router from './router'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
