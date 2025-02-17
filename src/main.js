import { createApp } from 'vue'
import App from './App.vue'
import router from './public/router'
import './assets/styles/custom.scss'

createApp(App)
    .use(router)
    .mount('#app')


