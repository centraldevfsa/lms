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
      <!-- Substituindo o botão -->
      <AppButton variant="primary" size="md" @click.prevent="handleSubmit">
        Enviar
      </AppButton>
    </form>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue"; // Certifique-se de que o caminho está correto

export default {
  name: "AppContact",
  components: {
    AppButton,
  },
  methods: {
    handleSubmit() {
      alert("Mensagem enviada com sucesso!"); // Substitua por sua lógica de envio
    },
  },
};
</script>

<style scoped>
/* Estilize conforme necessário */
</style>
