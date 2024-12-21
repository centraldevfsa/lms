<template>
  <footer class="z-40 backdrop-blur-md bg-black text-white py-10">
    <div
      class="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between"
    >
      <!-- Logotipo e nome da instituição -->
      <div class="lg:w-1/3 mb-6 lg:mb-0 lg:text-left">
        <img
          src="../assets/logo-fsa-horizontal-limpo.svg"
          alt="Faculdade de Saúde Avançada"
          class="w-30"
        />
      </div>

      <!-- Texto descritivo / Nota Legal -->
      <div class="lg:w-2/3 text-sm text-gray-300 lg:text-left">
        <p class="lg:max-w-lg lg:ml-auto text-[12px]">
          {{ $t('footer.legal-text') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
/* Adicione estilos adicionais aqui */
</style>
