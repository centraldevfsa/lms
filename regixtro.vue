<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="w-full max-w-md p-8 bg-gray-950 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-center text-gray-300 mt-4">Faça seu cadastro</h2>
        <form class="mt-6">
          <div>
            <label class="block text-sm text-gray-600" for="nome">Nome:</label>
            <input type="text" id="name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Digite seu nome" required>
          </div>
          <div class="mt-4">
            <label class="block text-sm text-gray-600" for="email">Email</label>
            <input type="email" id="email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="seuemail@gmail.com" required>
          </div>
          <div class="mt-4">
            <label class="block text-sm text-gray-600" for="senha">Senha</label>
            <input type="password" id="password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" required>
          </div>
          <button type="submit" class="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Criar conta</button>
        </form>
        <div class="flex items-center justify-between mt-4">
          <hr class="flex-grow">
          <span class="px-2 text-gray-500">ou</span>
          <hr class="flex-grow">
        </div>
        <div class="mt-4">
          <button class="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_g_logo.svg" class="w-5 h-5 mr-2" alt="Google Logo"> Entre com o Google
          </button>
        </div>
        <div class="mt-2">
          <button class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Facebook_Logo_2019.png" class="w-5 h-5 mr-2" alt="Facebook Logo"> Entre com o Facebook
          </button>
        </div>
        <p class="mt-4 text-center text-sm text-gray-600">Já tem uma conta? <a href="#" class="text-white font-bold hover:underline">Log In</a></p>
      </div>
    </div>
    </template>

    <style scoped>
      /* Estilos personalizados */
    </style>

    <script>
      // Script personalizado
    </script>