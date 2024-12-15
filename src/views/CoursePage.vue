<template>
  <div v-if="course" class="container mx-auto py-10">
    <div class="flex flex-col md:flex-row items-center gap-6">
      <!-- Imagem do curso -->
      <img :src="course.image" :alt="course.title" class="w-full md:w-1/3 rounded-lg shadow-md" />

      <!-- Detalhes do curso -->
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-4">{{ course.title }}</h1>
        <p class="text-gray-600 mb-6">{{ course.description }}</p>

        <!-- Tópicos do curso -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Tópicos do Curso:</h2>
          <ul class="list-disc list-inside text-gray-800">
            <li v-for="(topic, index) in course.topics" :key="index">{{ topic }}</li>
          </ul>
        </div>

        <!-- Botão para Checkout -->
        <router-link :to="{ path: '/checkout', query: { courseId: course.id } }"
          class="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Comprar Curso
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto py-96 text-center">
    <h1 class="text-2xl text-red-500">Curso não encontrado</h1>
  </div>
</template>

<script>
import { courses } from "@/data/coursesData";

export default {
  name: "CoursePage",
  props: ["id"],
  data() {
    return {
      course: null,
    };
  },
  created() {
    this.course = courses.find((course) => course.id === parseInt(this.id));
    if (!this.course) {
      console.error("Curso não encontrado");
    }
  },
};
</script>


<style scoped>
.container {
  max-width: 1200px;
}
</style>
