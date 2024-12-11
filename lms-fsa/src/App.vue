<template>
  <div id="app">
    <!-- Exibe a Navbar apenas se permitido pela meta -->
    <AppNavbar v-if="showNavbar" />
    <!-- Área principal -->
    <router-view />
    <!-- Exibe o Footer apenas se permitido pela meta -->
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
      return !this.$route.meta.hideLayout; // Verifica se deve esconder o layout
    },
    showFooter() {
      // Footer não é exibido na página de login
      return !this.$route.meta.hideLayout; // Verifica se deve esconder o layout
    },
  },
};
</script>

<style>
/* Estilos globais */
</style>
