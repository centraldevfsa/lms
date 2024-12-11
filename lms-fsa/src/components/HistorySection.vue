<template>
    <section class="history-section py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">Nossa História</h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          A FSA nasceu com o propósito de revolucionar a educação em nutrição funcional, conectando profissionais da saúde com conhecimento de ponta e transformando vidas.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FounderCard
            v-for="(founder, index) in founders"
            :key="index"
            :image="founder.image"
            :name="founder.name"
            :role="founder.role"
            :quote="founder.quote"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import FounderCard from "@/components/FounderCard.vue";
  
  export default {
    name: "HistorySection",
    components: {
      FounderCard,
    },
    data() {
      return {
        founders: [
          {
            image: "https://lp.saudeavancada.com.br/img/founder1.jpg",
            name: "Dr. João Silva",
            role: "Fundador e CEO",
            quote: "A educação transforma vidas, e esse é o nosso propósito.",
          },
          {
            image: "https://lp.saudeavancada.com.br/img/founder2.jpg",
            name: "Dra. Ana Souza",
            role: "Cofundadora e Diretora Acadêmica",
            quote: "Inspirar conhecimento é preparar o futuro da saúde.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .history-section {
    background: linear-gradient(to bottom, #1f2937, #111827);
  }
  </style>
  