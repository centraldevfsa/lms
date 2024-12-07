<template>
    <div
      class="slide"
      :style="{ backgroundImage: slide.backgroundImage }"
    >
      <div class="content p-8 pt-64">
        <img :src="slide.logo" alt="Logo" class="logo" />
        
        <p class="subtitle">{{ slide.subtitle }}</p>
        <div class="buttons">
          <AppButton :variant="slide.buttonPrimary.variant">
            {{ slide.buttonPrimary.text }}
          </AppButton>
          <AppButton :variant="slide.buttonSecondary.variant">
            {{ slide.buttonSecondary.text }}
          </AppButton>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppButton from "./AppButton.vue";
  
  export default {
    name: "SlideContent",
    components: {
      AppButton,
    },
    props: {
      slide: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .slide {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    
    align-items: center;
    padding:;
  }
  .content {
    color: white;
    max-width: 600px;
    text-align: left;
    
  }
  .logo {
    width: 100%;
    margin-bottom: 20px;
  }
  .title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
  .buttons {
    display: flex;
    gap: 20px;
  }
  </style>
  