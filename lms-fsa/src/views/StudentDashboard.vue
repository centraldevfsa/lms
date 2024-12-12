<template>
  <div
    v-if="user"
    :class="[
      'dashboard flex min-h-screen',
      darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800',
    ]"
  >
    <!-- Menu lateral -->
    <aside
      :class="[darkMode ? 'bg-gray-800' : 'bg-white']"
      class="w-64 shadow-lg"
    >
      <div class="p-6 flex justify-between items-center">
        <h1 class="text-xl font-bold">
          {{ user.role === 'admin' ? 'Admin Dashboard' : 'Aluno Dashboard' }}
        </h1>
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </div>
      <nav class="p-4">
        <ul>
          <li v-if="user.role === 'admin'">
            <router-link
              to="admin/usuarios"
              class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white"
            >
              <i class="fas fa-home mr-2"></i> Gerenciar Usuários
            </router-link>
          </li>
          <li>
            <router-link
              to="/areadoaluno"
              class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white"
            >
              <i class="fas fa-home mr-2"></i> Início
            </router-link>
          </li>
          <li>
            <router-link
              to="/meus-cursos"
              class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white"
            >
              <i class="fas fa-book mr-2"></i> Meus Cursos
            </router-link>
          </li>
          <li>
            <router-link
              to="/configuracoes"
              class="block py-2 px-4 rounded hover:bg-gray-700 hover:text-white"
            >
              <i class="fas fa-cog mr-2"></i> Configurações
            </router-link>
          </li>
          <li>
            <button
              @click="handleLogout"
              class="block py-2 px-4 w-full text-left rounded hover:bg-gray-700 hover:text-white"
            >
              <i class="fas fa-sign-out-alt mr-2"></i> Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Conteúdo principal -->
    <main class="flex-1 p-6">
      <!-- Saudação personalizada -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold">Bem-vindo, {{ user.name }}!</h2>
        <div v-if="user.role === 'admin'">
          <p class="text-gray-500">Visualize e gerencie os dados dos alunos.</p>
        </div>
        <div v-else>
          <p class="text-gray-500">Continue de onde você parou.</p>
        </div>
      </div>

      <!-- Progresso Geral -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">Progresso Geral</h3>
        <div class="w-full bg-gray-300 rounded-full h-4">
          <div
            class="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-out"
            :style="{ width: user.progress + '%' }"
          ></div>
        </div>
        <p class="mt-2 text-sm text-gray-500">
          Você completou {{ user.progress }}% de seus cursos.
        </p>
      </div>

      <!-- Botão para continuar de onde parou -->
      <div class="mb-6 flex justify-between items-center">
        <button
          class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Continuar de onde parou
        </button>
      </div>

      <!-- Cursos Matriculados -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Meus Cursos</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="course in user.courses"
            :key="course.id"
            class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <h4 class="font-semibold text-lg">{{ course.title }}</h4>
            <p class="text-sm text-gray-600">{{ course.description }}</p>
            <div class="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                class="bg-blue-600 h-2 rounded-full"
                :style="{ width: course.progress + '%' }"
              ></div>
            </div>
            <router-link
              :to="`/cursos/${course.id}`"
              class="block mt-2 text-blue-500 hover:underline"
            >
              Acessar Curso
            </router-link>
          </div>
        </div>
      </section>

      <!-- Gamificação -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Gamificação</h3>
        <div
          class="bg-yellow-100 rounded-lg shadow-md p-4 flex items-center gap-4"
        >
          <i class="fas fa-trophy text-yellow-500 text-4xl"></i>
          <div>
            <h4 class="font-semibold text-lg">Parabéns!</h4>
            <p class="text-sm text-gray-600">
              Você ganhou uma medalha por completar 50% do curso "Nutrição
              Funcional".
            </p>
          </div>
        </div>
      </section>

      <!-- Links úteis -->
      <section>
        <h3 class="text-xl font-semibold mb-4">Links Úteis</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <router-link
            to="/suporte"
            class="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <i class="fas fa-life-ring text-blue-500 text-xl mb-2"></i>
            <h4 class="font-semibold">Suporte</h4>
            <p class="text-sm text-gray-600">
              Entre em contato com nossa equipe.
            </p>
          </router-link>

          <router-link
            to="/faq"
            class="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <i class="fas fa-question-circle text-blue-500 text-xl mb-2"></i>
            <h4 class="font-semibold">FAQ</h4>
            <p class="text-sm text-gray-600">Perguntas frequentes.</p>
          </router-link>
        </div>
      </section>
    </main>
  </div>
  <div v-else class="min-h-screen flex justify-center items-center">
    <p class="text-gray-500">Carregando...</p>
  </div>
</template>

<script>
export default {
  name: 'StudentDashboard',
  data() {
    return {
      darkMode: JSON.parse(localStorage.getItem('darkMode')) || false, // Estado inicial do modo
      user: {
        name: 'Alessandro Becker',
        progress: 60,
        courses: [
          {
            id: 1,
            title: 'Nutrição Funcional',
            description: 'Aprenda os fundamentos e práticas avançadas.',
            progress: 75,
          },
          {
            id: 2,
            title: 'Exames Laboratoriais',
            description: 'Interpretação completa para diagnósticos.',
            progress: 50,
          },
        ],
      },
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    handleLogout() {
      localStorage.removeItem('user');
      this.$store.dispatch('logout');
      this.$router.push('/entrar');
    },
  },
  mounted() {
    const darkModeFromStorage = JSON.parse(localStorage.getItem('darkMode'));
    if (darkModeFromStorage) {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
