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
    <div class="progress-bar">
      <div class="progress" :style="{ width: `${progress}%` }"></div>
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
        backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-desk-sage.jpg')",
        logo: "https://lp.saudeavancada.com.br/img/logo-sage.svg",
        title: "Pós-graduação em Nutrição Funcional",
        subtitle: "com tutoria para profissionais da saúde.",
        buttonPrimary: { text: "Saiba mais", variant: "primary", color: "#1D9BF0" },
        buttonSecondary: { text: "Continuar", variant: "secondary", color: "#FFFFFF" },
      },
      {
        backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-fert-gest.jpg')",
        logo: "https://lp.saudeavancada.com.br/img/id-fert-gest.svg",
        title: "Fertilidade & Gestação",
        subtitle: "Aprenda a tratar a infertilidade e a programar a gestação.",
        buttonPrimary: { text: "Saiba mais", variant: "primary", color: "#EAB308" },
        buttonSecondary: { text: "Continuar", variant: "secondary", color: "#FFFFFF" },
      },
      {
        backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-jejum.jpg')",
        logo: "https://lp.saudeavancada.com.br/img/id-jejum.svg",
        title: "Jejum - Ferramentas para a saúde",
        subtitle: "Domine o jejum na prática clínica e revolucione a saúde de seus pacientes.",
        buttonPrimary: { text: "Comece agora", variant: "primary", color: "#F72585" },
        buttonSecondary: { text: "Continuar", variant: "secondary", color: "#FFFFFF" },
      },
      {
        backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-nutri-funcional.jpg')",
        logo: "https://lp.saudeavancada.com.br/img/id-nutri-func.svg",
        title: "Nutrição Funcional 3.0",
        subtitle: "Aprenda a tratar a infertilidade e a programar a gestação.",
        buttonPrimary: { text: "Saiba mais", variant: "primary", color: "#7209B7" },
        buttonSecondary: { text: "Continuar", variant: "secondary", color: "#FFFFFF" },
      },
      {
        backgroundImage: "url('https://lp.saudeavancada.com.br/img/bg-exames-lab.jpg')",
        logo: "https://lp.saudeavancada.com.br/img/logo-exames.svg",
        title: "Exames Laboratoriais",
        subtitle: "Domine a interpretação de exames laboratoriais para diagnósticos de excelência.",
        buttonPrimary: { text: "Saiba mais", variant: "primary", color: "#00A5CF" },
        buttonSecondary: { text: "Continuar", variant: "secondary", color: "#FFFFFF" },
      },
      ],
      activeSlide: 0,
      progress: 0,
      intervalId: null,
    };
  },
  methods: {
    nextSlide() {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
      this.progress = 0; // Reinicia a barra de progresso
    },
    updateProgress() {
      if (this.progress < 100) {
        this.progress += 2; // Incremento ajustável
      } else {
        this.nextSlide();
      }
    },
    startAutoPlay() {
      this.intervalId = setInterval(this.updateProgress, 100);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
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

.progress-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.2);
}

.progress {
  height: 100%;
  background-color: #ec4899; /* Cor pink-500 */
  transition: width 0.1s ease-out;
}
</style>