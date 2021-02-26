import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// nuevos
import vuetify from './plugins/vuetify';
import VMdDateRangePicker from "v-md-date-range-picker";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VMdDateRangePicker,
  render: h => h(App)
}).$mount('#app')
