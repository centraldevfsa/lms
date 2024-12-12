<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-900"
  >
    <div class="w-[90%] max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-300">Login</h2>
      <form @submit.prevent="handleLogin" class="mt-6">
        <div>
          <label class="block text-sm text-gray-400" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seuemail@gmail.com"
            required
          />
        </div>
        <div class="mt-4">
          <label class="block text-sm text-gray-400" for="password"
            >Senha</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Entrar
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-400">
        Não tem uma conta?
        <router-link to="/register" class="text-blue-500 hover:underline"
          >Cadastre-se</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        const response = await fetch('/data/users.json'); // Certifique-se de que o caminho está correto
        const users = await response.json();

        const authenticatedUser = users.find(
          (user) => user.email === this.email && user.password === this.password
        );

        if (authenticatedUser) {
          this.login(authenticatedUser); // Chama a action para salvar o usuário logado no Vuex{ email: this.email }); // Salva no Vuex
          if (authenticatedUser.role === 'admin') {
            this.$router.push('/admin');
          } else {
            this.$router.push('/areadoaluno'); // Chama a action para salvar o usuário
          }
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
      }
    },
  },
};
</script>

<style scoped>
/* Personalize conforme necessário */
</style>
