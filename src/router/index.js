import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import Login from '../views/dasboard/auth/login.vue'
import Register from '../views/dasboard/auth/Register.vue'
import Sms from '../views/dasboard/auth/Code-sms.vue'
import Recovery_Email from '../views/dasboard/auth/Recovery-email.vue'
import Recovery_Pass from '../views/dasboard/auth/Recovery-pass.vue'
import Plan from '../views/dasboard/payment/Plan.vue'

//Dashboard Admin
import MainAdmin from '../views/dasboard/admin/Main.vue'
import CadTeam from '../views/dasboard/admin/CadTeam.vue'
import ListTeam from '../views/dasboard/admin/ListTeam.vue'
import FunilVendas from '../views/dasboard/admin/FunilVendas.vue'
import CadLead from '../views/dasboard/admin/CadLead.vue'
import ViewListLead from '../views/dasboard/admin/ListLead.vue'
import ViewOrganization from '../views/dasboard/admin/Organization.vue'

//Dashboard Client
import DashboardClient from '../views/dasboard/client/Main.vue'



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
    {
      path: '/dashboard/admin',
      name: 'admin',
      component: MainAdmin
    },

    {
      path: '/dashboard/admin/cad-team',
      name: 'admin-team',
      component: CadTeam
    },
    {
      path: '/dashboard/admin/list-team',
      name: 'admin-list-team',
      component: ListTeam
    },

    {
      path: '/dashboard/admin/funil-vendas',
      name: 'admin-funil-vendas',
      component: FunilVendas
    },
    {
      path: '/dashboard/admin/cad-lead',
      name: 'admin-cad-lead',
      component: CadLead
    },
    {
      path: '/dashboard/admin/list-lead',
      name: 'admin-list-lead',
      component: ViewListLead
    },
    {
      path: '/dashboard/admin/organization',
      name: 'admin-organization',
      component: ViewOrganization
    },
    {
      path: '/dashboard/client/admin',
      name: 'admin-client',
      component: DashboardClient
    },
    
  ]
})

export default router
