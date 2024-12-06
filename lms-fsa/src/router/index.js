import { createRouter, createWebHistory } from "vue-router";

// Importação das views
import LandingHome from "../views/LandingHome.vue";
import UserLogin from "../views/UserLogin.vue";
import UserDashboard from "../views/UserDashboard.vue";
import Courses from "../views/Courses.vue";
import Formations from "../views/Formations.vue";
import Events from "../views/AppEvents.vue";
import Contact from "../views/AppContact.vue";

const routes = [
  {
    path: "/",
    component: LandingHome,
    name: "Home", // Nome da rota
  },
  {
    path: "/login",
    component: UserLogin,
    name: "Login", // Nome da rota
  },
  {
    path: "/dashboard",
    component: UserDashboard,
    name: "Dashboard", // Nome da rota
  },
  {
    path: "/courses",
    component: Courses,
    name: "Courses", // Nome da rota
  },
  {
    path: "/formations",
    component: Formations,
    name: "Formations", // Nome da rota
  },
  {
    path: "/events",
    component: Events,
    name: "Events", // Nome da rota
  },
  {
    path: "/contact",
    component: Contact,
    name: "Contact", // Nome da rota
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
