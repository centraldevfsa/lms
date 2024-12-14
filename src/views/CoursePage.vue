<template>
    <div class="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h2 class="text-2xl font-semibold mb-4">Curso: {{ course.title }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">{{ course.description }}</p>
  
      <div>
        <h3 class="text-xl font-semibold mb-4">Módulo 1</h3>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
          <h4 class="font-semibold">Aula 1: Introdução</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Assista à aula de introdução ao curso.
          </p>
          <video controls class="w-full rounded-lg">
            <source src="https://www.example.com/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <a
            href="#"
            class="block mt-4 text-blue-500 hover:underline"
            download="material.pdf"
          >
            Baixar Material (PDF)
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CoursePage",
    data() {
      return {
        course: {
          id: 1,
          title: "Curso de Nutrição",
          description: "Aprenda sobre nutrição funcional e saúde.",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  