import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import Login from '../views/dasboard/auth/login.vue'
import Register from '../views/dasboard/auth/Register.vue'
import Sms from '../views/dasboard/auth/Code-sms.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/code-sms',
      name: 'sms',
      component: Sms
    },
    
  ]
})

export default router