import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import Login from '../views/dasboard/auth/login.vue'
import Register from '../views/dasboard/auth/Register.vue'
import Sms from '../views/dasboard/auth/Code-sms.vue'
import Recovery_Email from '../views/dasboard/auth/Recovery-email.vue'
import Recovery_Pass from '../views/dasboard/auth/Recovery-pass.vue'
import Plan from '../views/dasboard/payment/Plan.vue'


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
    {
      path: '/recovery-email',
      name: 'recovery-email',
      component: Recovery_Email
    },
    {
      path: '/recovery-password',
      name: 'recovery-password',
      component: Recovery_Pass
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    
  ]
})

export default router
