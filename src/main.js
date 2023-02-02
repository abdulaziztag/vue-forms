import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vMaska } from "maska"

import './assets/main.css'

const app = createApp(App).directive("maska", vMaska)

app.use(router)

app.mount('#app')
