<template>
    <div class="p-8">
      <h1 class="text-4xl font-bold mb-4">Fale Conosco</h1>
      <p class="text-lg">Entre em contato conosco para dúvidas, sugestões ou suporte.</p>
      <form class="mt-6 space-y-4">
        <div>
          <label for="name" class="block text-lg font-semibold">Nome</label>
          <input
            type="text"
            id="name"
            class="w-full border p-2 rounded-lg"
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label for="email" class="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            class="w-full border p-2 rounded-lg"
            placeholder="Digite seu email"
          />
        </div>
        <div>
          <label for="message" class="block text-lg font-semibold">Mensagem</label>
          <textarea
            id="message"
            rows="4"
            class="w-full border p-2 rounded-lg"
            placeholder="Escreva sua mensagem"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppContact",
  };
  </script>
  
  <style scoped>
  /* Estilize conforme necessário */
  </style>
  