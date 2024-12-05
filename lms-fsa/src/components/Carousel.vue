<template>
    <section class="relative h-screen w-full overflow-hidden">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="{ 'opacity-0': currentSlide !== index, 'opacity-100': currentSlide === index }"
        :style="{ backgroundImage: `url(${slide.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <!-- Content Overlay -->
        <div class="h-full w-full bg-black/50 flex items-center">
          <div class="px-8 max-w-lg text-left text-white">
            <img :src="slide.logo" alt="Logo" class="mb-6 max-w-[150px]" />
            <h1 class="text-4xl font-bold mb-4">{{ slide.headline }}</h1>
            <p class="text-lg">{{ slide.subtext }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentSlide: 0,
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
      startCarousel() {
        setInterval(() => {
          this.currentSlide =
            (this.currentSlide + 1) % this.slides.length;
        }, 5000); // Change slide every 5 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  .opacity-100 {
    opacity: 1;
  }
  .opacity-0 {
    opacity: 0;
  }
  </style>
  