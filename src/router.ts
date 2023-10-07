import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import QA from './views/QA.vue'
import Info from './views/Info.vue'
import Main from './views/Main.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/qa',
            component: QA
        },
        {
            path: '/info',
            component: Info
        },
        {
            path: '/main',
            component: Main
        }
    ]
})

export default router
