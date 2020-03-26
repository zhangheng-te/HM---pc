import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '../views/login.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/login', component: login },

]

const router = new VueRouter({ routes })

export default router