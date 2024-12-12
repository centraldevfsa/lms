import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store'; // Certifique-se de importar o Vuex Store corretamente

// Importação das views principais
import LandingHome from '../views/LandingHome.vue';
import RegisterPage from '../views/RegisterPage.vue';
import Dashboard from '../views/StudentDashboard.vue';
import Courses from '../views/Courses.vue';
import Formations from '../views/Formations.vue';
import Events from '../views/AppEvents.vue';
import Contact from '../views/AppContact.vue';
import ProductDetails from '../views/ProductDetails.vue';
import UserDashboard from '../views/StudentDashboard.vue';
import UserLogin from '../views/UserLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

// Importação de páginas específicas para formações
import NutricFuncionalPage from '../views/NutricFuncionalPage.vue';
import FertilidadePage from '../views/FertilidadePage.vue';
import ExamesPage from '../views/ExamesPage.vue';

const routes = [
  // Página inicial
  {
    path: '/',
    component: LandingHome,
    name: 'Home',
  },
  // Autenticação

  {
    path: '/entrar',
    component: UserLogin,
    name: 'Login',
    meta: { hideLayout: true }, // Define que o layout será oculto
  },
  // Registro de novo usuário
  {
    path: '/register',
    component: RegisterPage,
    name: 'Register',
  },
  {
    path: '/admin',
    component: AdminDashboard,
    name: 'AdminDashboard',
    meta: { requiresAuth: true, hideLayout: true }, // Protegida
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'Dashboard',
    // meta: { requiresAuth: true }, // Rota protegida
  },
  {
    path: '/areadoaluno',
    component: UserDashboard,
    name: 'Dashboard',
    meta: { requiresAuth: true, hideLayout: true }, // Marca esta rota como protegida e define que o layout será oculto
  },
  // Cursos e formações
  {
    path: '/cursos',
    component: Courses,
    name: 'Courses',
  },
  {
    path: '/formacoes',
    component: Formations,
    name: 'Formations',
  },
  {
    path: '/formacoes/nutricao-funcional',
    component: NutricFuncionalPage,
    name: 'NutricFuncionalPage',
  },
  {
    path: '/formacoes/fertilidade-gestacao',
    component: FertilidadePage,
    name: 'FertilidadePage',
  },
  {
    path: '/formacoes/exames-laboratoriais',
    component: ExamesPage,
    name: 'ExamesPage',
  },
  // Eventos
  {
    path: '/eventos',
    component: Events,
    name: 'Events',
  },
  // Contato
  {
    path: '/contato',
    component: Contact,
    name: 'Contact',
  },
  // Detalhes de produtos
  {
    path: '/detalhes/:id',
    component: ProductDetails,
    name: 'ProductDetails',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Proteção de rotas
router.beforeEach((to, from, next) => {
  const isAuthenticated =
    store.getters.isAuthenticated || !!localStorage.getItem('user');
  const userRole = store.getters.userRole; // Verifica no Vuex ou localStorage

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.meta.rolla && to.meta.role !== userRole) {
    next({ name: 'Dashboard' }); // Redireciona para a página de login se não autenticado
  } else {
    next(); // Permite acessar a rota
  }
});

export default router;
