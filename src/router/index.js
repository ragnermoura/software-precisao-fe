import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/dashboard/auth/LoginView.vue";
import RegisterView from "../views/dashboard/auth/RegisterView.vue";
import RecoveryOneView from "../views/dashboard/auth/RecoveryOneView.vue";
import RecoveryTwoView from "../views/dashboard/auth/RecoveryTwoView.vue";
import CodeView from "../views/dashboard/auth/CodeView.vue";
import ProfileView from "../views/dashboard/auth/ProfileView.vue";
import MenuView from "../views/dashboard/MenuView.vue";
import PaymentView from "../views/payment/PaymentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: RegisterView,
    },
    {
      path: "/recovery-email",
      name: "recovery-email",
      component: RecoveryOneView,
    },
    {
      path: "/recovery-pass",
      name: "recovery-pass",
      component: RecoveryTwoView,
    },
    {
      path: "/code",
      name: "code",
      component: CodeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuView,
    },{
      path: "/payment",
      name: "payment",
      component: PaymentView,
    },
  ],
});

export default router;
