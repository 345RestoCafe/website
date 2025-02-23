import { createApp } from 'vue'
import App from './App.vue'
import router from './public/router'
import './assets/styles/custom.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
    .use(router)
    .mount('#app')


