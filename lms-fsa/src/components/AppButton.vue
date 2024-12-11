<template>
  <button
    v-if="!link"
    :class="computedClasses"
    @click="onClick"
  >
    <slot />
  </button>
  <router-link
    v-else-if="isRouterLink"
    :to="link"
    :class="computedClasses"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="link"
    :class="computedClasses"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    variant: {
      type: String,
      default: "primary", // Pode ser "primary", "secondary", etc.
    },
    size: {
      type: String,
      default: "md", // Pode ser "sm", "md", "lg".
    },
    link: {
      type: String,
      default: null, // Link para redirecionamento, opcional.
    },
  },
  computed: {
    computedClasses() {
      const baseClasses =
        "px-12 pt-2 pb-2 rounded-lg font-semibold focus:outline-none transition duration-200";
      const variants = {
        primary: "bg-pink-700 text-white hover:bg-gray-200 hover:border-pink-700 hover:text-pink-700 hover:shadow-2xl",
        secondary: "bg-transparent text-white border border-pink-700 hover:bg-gray-400",
        danger: "bg-red-500 text-white hover:bg-red-700",
      };
      const sizes = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      };
      return `${baseClasses} ${variants[this.variant]} ${sizes[this.size]}`;
    },
    isRouterLink() {
      // Verifica se o link é interno para usar router-link
      return this.link && !this.link.startsWith("http");
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais (se necessário) */
</style>
