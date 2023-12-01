import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
import './css/app.css'

createApp(App).use(store).mount('#app')
