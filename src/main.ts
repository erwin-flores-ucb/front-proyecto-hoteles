import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
// import './assets/css/bootstrap.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

const pinia = createPinia()

createApp(App)
.use(ElementPlus)
.use(pinia)
.use(router)
.mount('#app')
