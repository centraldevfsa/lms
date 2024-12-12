<template>
  <nav
    id="navbar"
    class="h-28 flex items-center justify-between p-8 text-white w-full z-40 fixed backdrop-blur-md transition-all"
  >
    <div class="flex items-center space-x-4">
      <div class="text-xl font-bold">
        <router-link to="/">
          <img
            src="http://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg"
            alt="Logo"
            class="h-24 cursor-pointer"
          />
        </router-link>
      </div>
      <div class="pl-4 relative w-96">
        <!-- Substituição do input pelo componente AppSearchInput -->
        <AppSearchInput
          placeholder="O que você quer aprender?"
          @input="handleSearch"
        />
      </div>
    </div>

    <!-- Lista Horizontal -->
    <ul class="flex justify-center items-center space-x-8 mt-4">
      <li>
        <router-link to="/shop" class="hover:text-pink-600 hover:text-lg"
          >Loja</router-link
        >
      </li>
      <li>
        <router-link to="/courses" class="hover:text-pink-600"
          >Cursos</router-link
        >
      </li>
      <li>
        <router-link to="/formations" class="hover:text-pink-600"
          >Formações</router-link
        >
      </li>
      <li>
        <router-link to="/events" class="hover:text-pink-600"
          >Eventos</router-link
        >
      </li>
      <li>
        <router-link to="/contact" class="hover:text-pink-600"
          >Contato</router-link
        >
      </li>
      <li>
        <AppButton variant="primary" :link="'/entrar'"> Login </AppButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppButton from './AppButton.vue';
import AppSearchInput from './AppSearchInput.vue';

export default {
  name: 'AppNavbar',
  components: {
    AppButton,
    AppSearchInput,
  },
  methods: {
    handleSearch(value) {
      console.log('Pesquisa:', value);
    },
  },
};
</script>

<style scoped>
/* Estilize conforme necessário */
</style>
