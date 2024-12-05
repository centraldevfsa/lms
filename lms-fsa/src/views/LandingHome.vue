<template>
  <div class="landing-home">
    <h1 class="text-3xl font-bold text-center mt-10">Bem-vindo à FSA!</h1>
    <p class="text-lg text-center mt-4">Explore nossos cursos e conteúdos exclusivos.</p>
    <div class="flex justify-center mt-10">
      <a href="/login" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200">
        Acesse Agora
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingHome',
};
</script>

<style scoped>
.landing-home {
  padding: 20px;
}
</style>
