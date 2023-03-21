import { createApp } from 'vue'
import App from './MainPage.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import mitt from './mitt'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' 

// createApp(App).use(store).use(router).mount('#app')
var sessionOptions = {
    persist: true
  }
// Vue.use(VueSession, sessionOptions)
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$serverUrl = '//localhost:8086'
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).use(BootstrapVue3).use(mitt).mount('#app')

library.add(fas, far, fab)

import './assets/commons.css'
