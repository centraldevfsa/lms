<template>
  <div class="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
    <h2 class="text-2xl font-semibold mb-4">Carrinho de Compras</h2>
    <div v-if="cart.length" class="space-y-4">
      <div
        v-for="course in cart"
        :key="course.id"
        class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
      >
        <h3 class="font-semibold text-lg">{{ course.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ course.description }}</p>
        <button
          @click="removeFromCart(course.id)"
          class="text-red-500 hover:underline mt-2"
        >
          Remover
        </button>
      </div>
    </div>
    <p v-else class="text-gray-500">Seu carrinho está vazio.</p>

    <div v-if="cart.length" class="mt-6">
      <button
        @click="finalizePurchase"
        class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Finalizar Compra
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      cart: [
        {
          id: 1,
          title: "Nutrição Funcional",
          description: "Aprenda sobre nutrição funcional e saúde.",
        },
        {
          id: 2,
          title: "Exames Laboratoriais",
          description: "Interpretação completa para diagnósticos.",
        },
      ],
    };
  },
  methods: {
    removeFromCart(courseId) {
      this.cart = this.cart.filter((course) => course.id !== courseId);
    },
    finalizePurchase() {
      // Simular a compra e redirecionar para o dashboard
      const purchasedCourses = this.cart.map((course) => course.id);
      localStorage.setItem("purchasedCourses", JSON.stringify(purchasedCourses));
      alert("Compra finalizada! Cursos adicionados ao seu painel.");
      this.$router.push("/areadoaluno");
    },
  },
};
</script>

<style scoped>
</style>
