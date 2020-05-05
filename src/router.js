import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Home from "./components/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }

]

const router = new VueRouter({
    routes
})

export default router
