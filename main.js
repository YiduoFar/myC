// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
/* vuex */
import store from './store/index.js'
/* 全局css */
import './common/css/global.css'
/* 全局常量 */
import CONSTANTS from './common/utils/constants.js'
/* uView */
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$constants = CONSTANTS

const app = new Vue({
  ...App,
  store
})


app.$mount()
// #endif

// #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// #endif
