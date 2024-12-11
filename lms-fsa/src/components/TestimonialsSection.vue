<template>
  <section class="testimonials-section relative flex flex-col items-center text-white py-16">
    <!-- Radial Gradient Background -->
    <div class="absolute inset-0 bg-gradient-radial from-gray-800 via-gray-900 to-gray-950 opacity-70 z-0"></div>

    <!-- Depoimento -->
    <div
      class="relative z-10 max-w-[700px] text-center transition-opacity duration-700"
      v-for="(testimonial, index) in visibleTestimonials"
      :key="index"
    >
      <img src="https://lp.saudeavancada.com.br/img/aspa.svg" alt="Aspas" class="w-10 mx-auto mb-4 text-pink-500">
      <p class="text-lg leading-relaxed mb-6">{{ testimonial.text }}</p>
      <div class="flex items-center justify-center gap-4">
        <img :src="testimonial.image" alt="Foto do usuário" class="w-16 h-16 rounded-full border-2 border-pink-500">
        <div class="text-left">
          <h4 class="font-bold">{{ testimonial.name }}</h4>
          <p class="text-sm text-pink-500">{{ testimonial.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text: "A pós-graduação em Nutrição Funcional foi um divisor de águas na minha carreira! Os conteúdos são super completos e os professores têm uma didática incrível. Me sinto muito mais confiante no consultório.",
          name: "Marina Oliveira",
          role: "Formação em Nutrição Funcional",
          image: "https://lp.saudeavancada.com.br/img/avatar-marina.jpg",
        },
        {
          text: "O curso de Fertilidade e Gestação me proporcionou ferramentas incríveis para atender minhas pacientes de maneira mais completa. É o diferencial que eu precisava!",
          name: "Luana Carvalho",
          role: "Curso de Fertilidade e Gestação",
          image: "https://lp.saudeavancada.com.br/img/avatar-luana.jpg",
        },
        // Adicione mais depoimentos aqui
      ],
      activeTestimonial: 0,
    };
  },
  computed: {
    visibleTestimonials() {
      return [this.testimonials[this.activeTestimonial]];
    },
  },
  mounted() {
    setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }, 5000); // Troca de depoimento a cada 5 segundos
  },
};
</script>

<style scoped>
.testimonials-section {
  position: relative;
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}
</style>
