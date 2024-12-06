<template>
  <div id="app">
    <!-- Exibe a Navbar apenas se não estiver em /login -->
    <AppNavbar v-if="showNavbar" />
    <!-- Área principal -->
    <router-view />
    <!-- Exibe o Footer apenas se não estiver em /login -->
    <AppFooter v-if="showFooter" />
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
  computed: {
    showNavbar() {
      // Navbar não é exibida na página de login
      return this.$route.path !== "/login";
    },
    showFooter() {
      // Footer não é exibido na página de login
      return this.$route.path !== "/login";
    },
  },
};
</script>

<style>
/* Estilos globais */
</style>
