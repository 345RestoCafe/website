import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Galleria from 'primevue/galleria'
import App from './App.vue'
import router from './public/router'
import "primeicons/primeicons.css";
import './assets/styles/custom.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('Galleria', Galleria)
    .mount('#app')



