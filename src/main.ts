import "preline/preline";
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { Transmit } from '@adonisjs/transmit-client'

import App from '@/App.vue'
import router from './router'

const app = createApp(App)

// export const transmit = await new Transmit({
//     baseUrl: "https://api.wazemi.net",
// })
app.use(createPinia())
app.use(router)

app.mount('#app')
