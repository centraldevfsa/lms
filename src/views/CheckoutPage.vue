<template>
  <div class="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
    <h2 class="text-2xl font-semibold mb-4">Carrinho de Compras</h2>
    <div v-if="cart.length" class="space-y-4">
      <div
        v-for="item in cart"
        :key="item.id"
        class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
      >
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.description }}</p>
        <span class="text-sm italic text-gray-500">
          Tipo: {{ item.type === 'course' ? 'Curso' : 'Formação' }}
        </span>
        <button
          @click="removeFromCart(item.id)"
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
import { courses } from "@/data/coursesData";
import { formations } from "@/data/formationsData";

export default {
  name: "CheckoutPage",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    loadCartItems() {
      // Simular carregamento de dados do carrinho (cursos e formações)
      const cartCourses = courses.map((course) => ({
        ...course,
        type: "course",
      }));
      const cartFormations = formations.map((formation) => ({
        ...formation,
        type: "formation",
      }));
      this.cart = [...cartCourses, ...cartFormations];
    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
    },
    finalizePurchase() {
      // Simular a compra e redirecionar para o dashboard
      const purchasedItems = this.cart.map((item) => ({
        id: item.id,
        type: item.type,
      }));
      localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems));
      alert("Compra finalizada! Itens adicionados ao seu painel.");
      this.$router.push("/areadoaluno");
    },
  },
  mounted() {
    this.loadCartItems();
  },
};
</script>

<style scoped>
</style>
