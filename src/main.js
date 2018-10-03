import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import store from './store'

Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  store, //attach the store to the Vue instance
  router,
  render: h => h(App)
}).$mount('#app')
