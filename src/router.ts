import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import QA from './views/QA.vue'
import Info from './views/Info.vue'
import Main from './views/Main.vue'
import Role from './views/Role.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/role/:bookid',
            component: Role
        },
        {
            path: '/main/:roleid',
            component: Main
        },
        {
            path: '/qa/:roleid',
            component: QA
        },
        {
            path: '/info',
            component: Info
        },    
    ]
})

export default router
