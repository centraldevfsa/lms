<template>
  <nav
    id="navbar"
    class="h-28 flex items-center justify-between p-8 text-white w-full z-40 fixed backdrop-blur-md transition-all bg-gray-900 dark:bg-gray-900"
  >
    <!-- Logotipo -->
    <div class="text-xl font-bold">
      <router-link to="/">
        <img
          src="http://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg"
          alt="Logo"
          class="h-16 md:h-24 cursor-pointer"
        />
      </router-link>
    </div>

    <!-- Ícones e botões no mobile -->
    <div class="flex items-center space-x-4 md:hidden">
      <!-- Ícone de sacola com contador -->
      <div class="relative cursor-pointer" aria-label="Carrinho">
        <i class="fas fa-shopping-bag text-2xl"></i>
        <span
          v-if="cartItems > 0"
          class="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
        >
          {{ cartItems }}
        </span>
      </div>

      <!-- Botão de idioma -->
      <button @click="toggleLanguage" class="flex items-center space-x-2 text-sm" aria-label="Alterar idioma">
        <i class="fas fa-globe"></i>
        <span>{{ currentLanguage }}</span>
      </button>

      <!-- Botão Login/Usuário -->
      <div>
        <router-link v-if="!isLoggedIn" to="/entrar" class="text-sm hover:underline">Entrar</router-link>
        <div v-else class="relative">
          <button @click="toggleUserMenu" class="flex items-center" aria-label="Menu do usuário">
            <i class="fas fa-user text-xl"></i>
          </button>
          <div
            v-if="showUserMenu"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded shadow-lg"
          >
            <router-link
              to="/dashboard"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Meu Dashboard
            </router-link>
            <button
              @click="handleLogout"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <!-- Botão hambúrguer -->
      <button @click="toggleMobileMenu" class="text-xl" aria-label="Menu">
        <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>

    <!-- Menu principal no desktop -->
    <div class="hidden md:flex items-center space-x-8">
      <ul class="flex space-x-8">
        <li><router-link to="/shop" class="hover:text-pink-600">Loja</router-link></li>
        <li><router-link to="/cursos" class="hover:text-pink-600">Cursos</router-link></li>
        <li><router-link to="/formacoes" class="hover:text-pink-600">Formações</router-link></li>
        <li><router-link to="/events" class="hover:text-pink-600">Eventos</router-link></li>
        <li><router-link to="/contact" class="hover:text-pink-600">Contato</router-link></li>
      </ul>

      <!-- Barra de pesquisa -->
      <div class="pl-4 relative w-96">
        <AppSearchInput
          placeholder="O que você quer aprender?"
          @input="handleSearch"
        />
      </div>

      <!-- Ícone de sacola com contador -->
      <div class="relative cursor-pointer" aria-label="Carrinho">
        <i class="fas fa-shopping-bag text-2xl"></i>
        <span
          v-if="cartItems > 0"
          class="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
        >
          {{ cartItems }}
        </span>
      </div>

      <!-- Botão de idioma -->
      <button @click="toggleLanguage" class="flex items-center space-x-2 text-sm" aria-label="Alterar idioma">
        <i class="fas fa-globe"></i>
        <span>{{ currentLanguage }}</span>
      </button>

      <!-- Botão Login/Usuário -->
      <div>
        <router-link v-if="!isLoggedIn" to="/entrar" class="text-sm hover:underline">Entrar</router-link>
        <div v-else class="relative">
          <button @click="toggleUserMenu" class="flex items-center" aria-label="Menu do usuário">
            <i class="fas fa-user text-xl"></i>
          </button>
          <div
            v-if="showUserMenu"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded shadow-lg"
          >
            <router-link
              to="/dashboard"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Meu Dashboard
            </router-link>
            <button
              @click="handleLogout"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu lateral responsivo -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end"
    >
      <div class="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-screen">
        <button @click="toggleMobileMenu" class="p-4 text-right">
          <i class="fas fa-times"></i>
        </button>
        <div class="p-4">
          <!-- Barra de pesquisa no mobile -->
          <AppSearchInput
            placeholder="O que você quer aprender?"
            @input="handleSearch"
          />
        </div>
        <ul class="space-y-4 p-4">
          <li><router-link to="/shop">Loja</router-link></li>
          <li><router-link to="/courses">Cursos</router-link></li>
          <li><router-link to="/formations">Formações</router-link></li>
          <li><router-link to="/events">Eventos</router-link></li>
          <li><router-link to="/contact">Contato</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AppSearchInput from './AppSearchInput.vue';

export default {
  name: 'AppNavbar',
  components: {
    AppSearchInput,
  },
  data() {
    return {
      cartItems: 0,
      isLoggedIn: false,
      showUserMenu: false,
      mobileMenuOpen: false,
      currentLanguage: 'PT',
    };
  },
  methods: {
    handleSearch(value) {
      console.log('Pesquisa:', value);
    },
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.showUserMenu = false;
      this.$router.push('/');
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'PT' ? 'ES' : 'PT';
    },
  },
};
</script>

<style scoped>
#navbar {
  background: rgba(0, 0, 0, 0.7);
}
</style>
