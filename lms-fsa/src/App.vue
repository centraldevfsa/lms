<template>
  <div id="app">
    <AppNavbar v-if="showNavbar" />
    <router-view />
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
  mounted() {
    // Aplica o tema baseado no localStorage ou prefereências do sistema
    const darkMode = JSON.parse(localStorage.getItem("darkMode")) || window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  computed: {
    showNavbar() {
      return !this.$route.meta.hideLayout;
    },
    showFooter() {
      return !this.$route.meta.hideLayout;
    },
  },
};
</script>

<style>
/* Adicione estilos globais, se necessário */
</style>
