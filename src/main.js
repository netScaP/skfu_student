import Vue from 'vue'
import App from './App.vue'
import router from './router'

import feathersClient from './utils/feathers-client'

Vue.config.productionTip = false

Vue.prototype.$apiClient = feathersClient

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
