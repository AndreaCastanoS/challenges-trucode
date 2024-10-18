import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import {routes} from './router'
import { createPinia } from 'pinia'


const router = createRouter({
    history: createWebHistory(),
    routes
})
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
