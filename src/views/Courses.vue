<template>
  <div>
    <div class="container mx-auto py-10">
      <div class="mt-16 w-full h-72 bg-cover bg-center mb-8"
        style="background-image: url('https://www.melissa.com.br/file/v2377357944649050462/general/202412_VM_MelissaBR_CombosFamilia_HomeSlide_D3.jpg');">
        <!-- You can add text or other elements here if needed -->
      </div>

      <!-- Cursos -->
      <h1 class="text-white text-3xl font-bold text-center mb-8">Nossos Cursos</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="course in courses" :key="course.id" class="bg-white rounded-lg shadow-md overflow-hidden">

          <img :src="course.image" :alt="course.title" class="w-full h-48 object-cover">

          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ course.title }}</h2>
            <p class="text-gray-600 mb-4">{{ course.description }}</p>

            <router-link :to="`/cursos/${course.id}`"
              class="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Ver Detalhes
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { courses } from "../data/coursesData";

export default {
  name: "CoursesPage",
  data() {
    return {
      courses,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.w-full {
  width: 100%;
}

.h-72 {
  height: 18rem;
  /* Maintain consistent height for the banner */
}
</style>
