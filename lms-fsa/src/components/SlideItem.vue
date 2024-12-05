<template>
    <div
      class="w-full h-screen flex items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: background }"
    >
      <div class="text-center text-white">
        <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
        <p class="text-lg">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SlideItem",
    props: {
      title: String,
      description: String,
      background: String,
    },
  };
  </script>
  
  <style scoped>
  /* Estilize conforme necessário */
  </style>
  