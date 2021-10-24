localStorage.setItem('userDataId', 1)
localStorage.setItem('userDataName', "ahmet selim")
localStorage.setItem('userDataEmail', "hi@ahmetsc.com")
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'
import VueConfirmDialog from 'vue-confirm-dialog'
import Vuelidate from 'vuelidate'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

axios.defaults.baseURL = 'http://localhost:8080/'; // SYMFONY API URL

Vue.use(VueAxios, axios)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(Vuelidate)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
