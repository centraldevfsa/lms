<template>
      <!-- Sidebar -->
      <div
        id="sidebar"
        class="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform transition-transform duration-300 z-50 shadow-lg"
        :class="{ '-translate-x-full': !isSidebarOpen }"
      >
        <div class="flex items-center justify-between p-5">
          <h2 class="text-2xl font-bold">
            <img
              src="http://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg"
              alt="Logo da FSA"
              class="h-16"
            />
          </h2>
          <button @click="closeMenu" class="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Fechar Menu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul class="p-5 space-y-3">
          <li><a href="#" class="hover:underline">Formações e cursos</a></li>
          <li><a href="#" class="hover:underline">Sobre a FSA</a></li>
          <li><a href="#" class="hover:underline">Login</a></li>
        </ul>
      </div>
  
      <!-- Overlay -->
      <div
        id="overlay"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        :class="{ hidden: !isSidebarOpen }"
        @click="closeMenu"
      ></div>
  </template>
  
  <script>
  import { useSidebar } from "../utils/sidebar.js";
  
  export default {
    name: "AppSidebar",
    setup() {
      const { isSidebarOpen, openMenu, closeMenu } = useSidebar();
      return { isSidebarOpen, openMenu, closeMenu };
    },
  };
  </script>
  
  <style scoped>
  #sidebar {
    transition: transform 0.3s ease, width 0.3s ease, background-color 0.3s ease,
      backdrop-filter 0.3s ease;
  }
  </style>
  