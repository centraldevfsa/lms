<template>
    <div class="founder-card bg-gray-800 rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-all">
      <img
        :src="image"
        alt="Foto do Fundador"
        class="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 class="text-xl font-bold mb-2">{{ name }}</h3>
      <p class="text-sm text-gray-400 mb-4">{{ role }}</p>
      <blockquote class="text-gray-300 italic">"{{ quote }}"</blockquote>
    </div>
  </template>
  
  <script>
  export default {
    name: "FounderCard",
    props: {
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      quote: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .founder-card:hover {
    transform: translateY(-5px);
  }
  </style>
  