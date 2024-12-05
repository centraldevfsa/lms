<template>
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.75"
        stroke="currentColor"
        class="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-100"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        :placeholder="placeholder"
        class="pl-10 pr-4 py-1.5 w-full border border-gray-400 rounded-lg bg-white bg-opacity-5 shadow-xl shadow-gray-800 text-white focus:outline-none focus:border-0 focus:ring-2 focus:ring-pink-500"
        @input="onInput"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "AppSearchInput",
    props: {
      placeholder: {
        type: String,
        default: "O que você quer aprender?",
      },
    },
    methods: {
      onInput(event) {
        this.$emit("input", event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilize conforme necessário */
  </style>
  