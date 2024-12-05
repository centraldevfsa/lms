<template>
  <section id="main-content" class="relative bg-cover bg-center h-screen" style="background-image: url('https://lp.saudeavancada.com.br/fsaneo/img/bg-desk-sage.jpg');">
    <div class="flex items-center h-full px-10">
      <div class="text-white mt-32">
        <img src="https://lp.saudeavancada.com.br/fsaneo/img/logo-sage.svg" alt="Logo FSA" class="h-32 mb-6">
        <h1 class="text-5xl font-bold mb-4 max-w-xl">Pós-graduação em Nutrição Funcional</h1>
        <p class="text-3xl mb-6 w-full max-w-2xl">com tutoria para profissionais da saúde.</p>
        <div class="mt-16 flex gap-4"> <!-- Adicionado "flex" e "gap-4" -->
          <a href="#">
            <button class="px-6 py-3  bg-[#DC2E5D] hover:bg-white text-white hover:text-[#DC2E5D] hover:font-medium rounded-lg transition duration-200">
              Dê o play no seu curso
            </button>
          </a>
          <a href="#">
            <button class="px-6 py-3 border border-[#a23653] text-white rounded-lg hover:border-white transition duration-200">
              <div class="icon-container">
                <div class="play-icon"></div>
              </div>
              <span class="button-text">Continuar de onde parou</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
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
