<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <div class="w-[90%] max-w-md p-8 bg-dark-purple rounded-lg shadow-custom-black">
      <div class="flex justify-center mb-6">
        <img
          src="http://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg"
          alt="Logo da FSA"
          class="h-28"
        />
      </div>
      <h2 class="text-xl font-semibold text-center text-gray-300">Faça seu login</h2>
      <form @submit.prevent="handleLogin" class="mt-6">
        <div>
          <label class="block text-sm text-gray-300" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700"
            placeholder="seuemail@dominio.com"
            required
          />
        </div>
        <div class="mt-4">
          <label class="block text-sm text-gray-300" for="password">Senha</label>
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
          Login
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Não tem uma conta?
        <router-link to="/signup" class="text-white font-bold hover:underline"
          >Cadastre-se</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      alert(`Email: ${this.email}\nSenha: ${this.password}`);
      // Adicione a lógica de autenticação aqui
    },
  },
};
</script>

<style scoped>
/* Estilize conforme necessário */
</style>
