<template>
    <div class="relative w-full h-screen">
      <!-- Slider -->
      <swiper
        :modules=""
        class="h-full"
        loop="true"
        keyboard="true"
        :autoplay="{ delay: 5000 }"
        navigation="true"
        slides-per-view="1"
      >
        <!-- Slides -->
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full h-full flex items-center justify-center bg-cover bg-center"
          :style="{ backgroundImage: slide.background }"
        >
          <div class="text-white p-8 max-w-2xl">
            <img :src="slide.logo" alt="Logo" class="mb-4 w-40" />
            <h1 class="text-4xl font-bold mb-4">{{ slide.headline }}</h1>
            <p class="text-lg">{{ slide.subtext }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/swiper-bundle.css";
  
  export default {
    name: "LandingSlider",
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        slides: [
          {
            background: "url('https://lp.saudeavancada.com.br/fsaneo/img/bg-desk-sage.jpg')",
            logo: "https://lp.saudeavancada.com.br/fsaneo/img/logo-sage.svg",
            headline: "Nutrição Funcional 3.0",
            subtext: "Desenvolva habilidades únicas em nutrição com tutoria especializada.",
          },
          {
            background: "url('https://source.unsplash.com/random/1920x1080/?nutrition')",
            logo: "https://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg",
            headline: "Saúde Integrativa",
            subtext: "Explore a conexão entre mente, corpo e alimentação saudável.",
          },
          // Outros slides aqui...
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .swiper-slide div {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  </style>
  