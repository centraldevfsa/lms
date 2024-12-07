import { createRouter, createWebHistory } from "vue-router";

// Importação das views
import LandingHome from "../views/LandingHome.vue";
import UserLogin from "../views/UserLogin.vue";
import UserDashboard from "../views/UserDashboard.vue";
import Courses from "../views/Courses.vue";
import Formations from "../views/Formations.vue";
import Events from "../views/AppEvents.vue";
import Contact from "../views/AppContact.vue";
import ProductDetails from "@/views/ProductDetails.vue";

// Importação de páginas específicas para formações
import NutricFuncionalPage from "../views/NutricFuncionalPage.vue";
import FertilidadePage from "../views/FertilidadePage.vue";
import ExamesPage from "../views/ExamesPage.vue";

const routes = [
  {
    path: "/",
    component: LandingHome,
    name: "Home",
  },
  {
    path: "/entrar",
    component: UserLogin,
    name: "Login",
  },
  {
    path: "/areadoaluno",
    component: UserDashboard,
    name: "Dashboard",
  },
  {
    path: "/cursos",
    component: Courses,
    name: "Courses",
  },
  {
    path: "/formacoes",
    component: Formations,
    name: "Formations",
  },
  {
    path: "/formacoes/nutricao-funcional",
    component: NutricFuncionalPage,
    name: "NutricFuncionalPage",
  },
  {
    path: "/formacoes/fertilidade-gestacao",
    component: FertilidadePage,
    name: "FertilidadePage",
  },
  {
    path: "/formacoes/exames-laboratoriais",
    component: ExamesPage,
    name: "ExamesPage",
  },
  {
    path: "/eventos",
    component: Events,
    name: "Events",
  },
  {
    path: "/contato",
    component: Contact,
    name: "Contact",
  },

  { 
    path: "/detalhes/:id",
    component: ProductDetails,
    name: "ProductDetails"
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
