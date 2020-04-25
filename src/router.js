import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Menu from "./views/Menu";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu
    }
]

const router = new VueRouter({
    routes
})

export default router
