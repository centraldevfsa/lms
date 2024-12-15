<template>
    <div >
      <div class="container mx-auto py-10">
        <div class="mt-16 w-full h-72 bg-cover bg-center mb-8" style="background-image: url('https://www.melissa.com.br/file/v2377357944649050462/general/202412_VM_MelissaBR_CombosFamilia_HomeSlide_D3.jpg');">
        <!-- You can add text or other elements here if needed -->
      </div>
  
        <!-- Cursos -->
        <h1 class="text-white text-3xl font-bold text-center mb-8">Nossas formações</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="formation in formations" 
            :key="formation.id" 
            class="bg-white rounded-lg shadow-md overflow-hidden">
  
            <img :src="formation.image" :alt="formation.title" class="w-full h-48 object-cover">
  
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{{ formation.title }}</h2>
              <p class="text-gray-600 mb-4">{{ formation.description }}</p>
  
              <router-link 
                :to="formation.link" 
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
import { formations } from '@/data/formationsData';

export default {
  name: 'FormationPage',
  props: ['id'],
  data() {
    return {
      formations: null,
    };
  },
  created() {
    // Carrega o curso baseado no ID passado como parâmetro de rota
    this.formation = formations.find((formation) => formation.id === parseInt(this.id));
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
