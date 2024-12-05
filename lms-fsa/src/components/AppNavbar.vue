<template>
  <nav
    id="navbar"
    class="h-28 flex items-center justify-between p-8 text-white w-full z-40 fixed backdrop-blur-md transition-all"
  >
    <div class="flex items-center space-x-4">
      <div class="text-xl font-bold">
        <img
          src="http://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg"
          alt="Logo"
          class="h-24"
        />
      </div>
      <div class="relative w-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="O que você quer aprender?"
          class="pl-10 pr-4 py-1.5 w-full border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <!-- Lista Horizontal -->
    <ul class="flex text-left space-x-8 mr-4">
      <li><router-link to="/courses" class="hover:text-pink-600">Cursos</router-link></li>
      <li><router-link to="/formations" class="hover:text-gray-300">Formações</router-link></li>
      <li><router-link to="/events" class="hover:text-gray-300">Eventos</router-link></li>
      <li><router-link to="/contact" class="hover:text-gray-300">Contato</router-link></li>
      <li>
        <AppButton variant="primary">
          <router-link to="/login">Login</router-link>
        </AppButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppButton from "./AppButton.vue";

export default {
  name: "AppNavbar",
  components: {
    AppButton,
  },
};
</script>

<style scoped>
/* Estilize conforme necessário */
</style>
