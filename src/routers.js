import Login from './components/Login.vue'
import Home from './components/Home.vue'
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/home'
    },
    {
        name: 'Login',
        component: Login,
        path: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;