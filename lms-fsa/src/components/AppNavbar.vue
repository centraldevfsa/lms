<template>
  <nav 
    id="navbar"
    class="h-24 flex items-center justify-between p-8 text-white w-full fixed z-40 transition-all border border-black"
  >
    <div class="flex items-center space-x-4">
      <button id="menu-btn" class="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div class="text-xl font-bold">
        <img
          src="http://lp.saudeavancada.com.br/fsaneo/img/logo-fsa-horizontal.svg"
          alt="Logo"
        />
        <p class="">Ahhhrrrrrrrrr</p>
      </div>
    </div>
    <div class="space-x-4">
      <a
        href="#"
        class="px-6 py-3 bg-[#DC2E5D] text-white rounded-lg hover:bg-red-700 transition duration-200"
      >
        Login
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>
#navbar {
  transition: transform 0.3s ease, width 0.3s ease, background-color 0.3s ease,
    backdrop-filter 0.3s ease;
}
</style>
