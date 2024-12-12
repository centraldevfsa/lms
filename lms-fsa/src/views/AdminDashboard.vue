<template>
    <div :class="['dashboard flex min-h-screen', darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800']">
      <!-- Menu lateral -->
      <aside :class="[darkMode ? 'bg-gray-800' : 'bg-white']" class="w-64 shadow-lg">
        <div class="p-6 flex justify-between items-center">
          <h1 class="text-xl font-bold">Admin Dashboard</h1>
          <button @click="toggleDarkMode" class="p-2 bg-gray-700 text-white rounded-md focus:outline-none">
            <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
        <nav class="p-4">
          <ul>
            <li>
              <router-link to="/admin/usuarios" class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-users mr-2"></i> Gerenciar Usuários
              </router-link>
            </li>
            <li>
              <router-link to="/admin/relatorios" class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-chart-line mr-2"></i> Relatórios
              </router-link>
            </li>
            <li>
              <button @click="handleLogout" class="block py-2 px-4 w-full text-left rounded hover:bg-gray-700 hover:text-white">
                <i class="fas fa-sign-out-alt mr-2"></i> Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
  
      <!-- Conteúdo principal -->
      <main class="flex-1 p-6">
        <h2 class="text-2xl font-semibold">Bem-vindo, {{ user.name }}!</h2>
        <p class="text-gray-500">Aqui você pode gerenciar as operações administrativas.</p>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminDashboard",
    data() {
      return {
        darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
        user: {
          name: "Administrador",
        },
      };
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
      },
      handleLogout() {
        localStorage.removeItem("user");
        this.$store.dispatch("logout");
        this.$router.push("/entrar");
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    min-height: 100vh;
  }
  
  aside {
    width: 16rem;
  }
  
  main {
    flex: 1;
    padding: 1.5rem;
  }
  </style>
  