import { createRouter, createWebHistory } from 'vue-router';
import LandingHome from '../views/LandingHome.vue';
import UserLogin from '../views/UserLogin.vue';
import UserDashboard from '../views/UserDashboard.vue';

const routes = [
  { path: '/', component: LandingHome },
  { path: '/login', component: UserLogin },
  { path: '/dashboard', component: UserDashboard },
];

const router = createRouter({
  history: createWebHistory(), // Usando modo de histórico
  routes,
});

export default router;
