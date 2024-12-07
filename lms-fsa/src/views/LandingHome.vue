<template>
  <div>
    <LandingSlider />
    <section class="px-8 py-12 bg-roxo-fsa">
      <h2 class="text-3xl font-regular text-white text-left ml-4 mt-4">Conheça nossas formações</h2>
      <div class="landing-home">
    <CarouselHome />
  </div>
 
    </section>
  </div>
</template>

<script>
import LandingSlider from "@/components/LandingSlider.vue";

import CarouselHome from "@/components/CarouselHome.vue";

export default {
  name: "LandingHome",
  components: {
    LandingSlider,
    CarouselHome,
  },
  data() {
    return {
      formations: [
        { image: "https://lp.saudeavancada.com.br/img/nutricao-funcional.jpg", link: "/formation1" },
        { image: "https://lp.saudeavancada.com.br/img/fertilidade-gestacao.jpg", link: "/formation2" },
        { image: "https://lp.saudeavancada.com.br/img/exames-laboratoriais.jpg", link: "/formation3" },
        { image: "https://lp.saudeavancada.com.br/img/jejum.jpg", link: "/formation4" },
        { image: "https://lp.saudeavancada.com.br/img/jejum.jpg", link: "/formation5" },
        // Adicione mais cards aqui
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding: 3rem 1rem;
}
</style>
