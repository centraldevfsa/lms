<template>
    <div class="slider">
      <div
        class="slides"
        :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
      >
        <SlideContent
          v-for="(slide, index) in slides"
          :key="index"
          :slide="slide"
        />
      </div>
    </div>
  </template>
  
  <script>
  import SlideContent from "./SlideContent.vue";
  
  export default {
    name: "LandingSlider",
    components: {
      SlideContent,
    },
    data() {
      return {
        slides: [
          {
            backgroundImage: "url('https://lp.saudeavancada.com.br/fsaneo/img/bg-desk-sage.jpg')",
            logo: "https://lp.saudeavancada.com.br/fsaneo/img/logo-sage.svg",
            title: "",
            subtitle: "Pós-graduação em Nutrição Funcional com tutoria para profissionais da saúde.",
            buttonPrimary: { text: "Saiba mais", variant: "primary" },
            buttonSecondary: { text: "Continuar", variant: "secondary" },
          },
          {
            backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-fert-gest.jpg')",
            logo: "https://lp.saudeavancada.com.br/img/id-fert-gest.svg",
            title: "",
            subtitle: "Aprenda a tratar a infertilidade e a programar a gestação.",
            buttonPrimary: { text: "Saiba mais", variant: "primary" },
            buttonSecondary: { text: "Continuar", variant: "secondary" },
          },
          {
            backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-jejum.jpg')",
            logo: "https://lp.saudeavancada.com.br/img/id-jejum.svg",
            title: "",
            subtitle: "Domine o jejum na prática clínica e revolucione a saúde de seus pacientes.",
            buttonPrimary: { text: "Saiba mais", variant: "primary" },
            buttonSecondary: { text: "Continuar", variant: "secondary" },
          },
          {
            backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-nutri-funcional.jpg')",
            logo: "https://lp.saudeavancada.com.br/img/id-nutri-func.svg",
            title: "",
            subtitle: "Aprenda a tratar a infertilidade e a programar a gestação e lorem e ipsum et dolor et sit amet.",
            buttonPrimary: { text: "Saiba mais", variant: "primary" },
            buttonSecondary: { text: "Continuar", variant: "secondary" },
          },
          {
            backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-exames-lab.jpg')",
            logo: "https://lp.saudeavancada.com.br/img/id-exames.svg",
            title: "",
            subtitle: "Domine a interpretação de exames laboratoriais para diagnósticos de excelência.",
            buttonPrimary: { text: "Saiba mais", variant: "primary" },
            buttonSecondary: { text: "Continuar", variant: "secondary" },
          },
        ],
        activeSlide: 0,
      };
    },
    methods: {
      nextSlide() {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
      },
      autoPlay() {
        setInterval(() => {
          this.nextSlide();
        }, 5000); // Troca a cada 5 segundos
      },
    },
    mounted() {
      this.autoPlay();
    },
  };
  </script>
  
  <style scoped>
  .slider {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  
  .slides {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .slides > * {
    flex: 0 0 100%; /* Cada slide ocupa 100% da largura do slider */
  }
  </style>
  