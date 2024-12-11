<template>
    <section class="benefits py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Benefícios da Plataforma</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            v-for="(benefit, index) in benefits"
            :key="index"
            :icon="benefit.icon"
            :title="benefit.title"
            :description="benefit.description"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import BenefitCard from "@/components/BenefitCard.vue";
  
  export default {
    name: "BenefitsSection",
    components: {
      BenefitCard,
    },
    data() {
      return {
        benefits: [
          {
            icon: "https://lp.saudeavancada.com.br/img/icon-plataforma.svg",
            title: "Plataforma própria",
            description: "Desenvolvida exclusivamente para uma experiência única.",
          },
          {
            icon: "https://lp.saudeavancada.com.br/img/icon-personalizada.svg",
            title: "Experiência personalizada",
            description: "Conteúdos ajustados às suas necessidades.",
          },
          {
            icon: "https://lp.saudeavancada.com.br/img/icon-atualizacao.svg",
            title: "Atualização constante",
            description: "Sempre com as últimas novidades do mercado.",
          },
          {
            icon: "https://lp.saudeavancada.com.br/img/icon-suporte.svg",
            title: "Suporte dedicado",
            description: "Ajuda especializada sempre que você precisar.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .benefits {
    background: linear-gradient(to bottom, #1e293b, #0f172a);
  }
  </style>
  