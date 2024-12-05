import { createRouter, createWebHistory } from "vue-router";
import LandingHome from "../views/LandingHome.vue";
import UserLogin from "../views/UserLogin.vue";
import UserDashboard from "../views/UserDashboard.vue";
import AppCourses from "../views/AppCourses.vue";
import AppFormations from "../views/AppFormations.vue";
import AppEvents from "../views/AppEvents.vue";
import AppContact from "../views/AppContact.vue";

const routes = [
  { path: "/", component: LandingHome },
  { path: "/login", component: UserLogin },
  { path: "/dashboard", component: UserDashboard },
  { path: "/courses", component: AppCourses },
  { path: "/formations", component: AppFormations },
  { path: "/events", component: AppEvents },
  { path: "/contact", component: AppContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
