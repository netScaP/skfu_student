import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ru-RU' // lang i18n

import './permissions' // permission control

import feathersClient from './utils/feathers-client'

Vue.use(ElementUI, { locale })

import vSelect from '@/components/select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

Vue.prototype.$apiClient = feathersClient

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
