<template>
  <div
    class="benefit-card text-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all"
  >
    <img :src="icon" alt="Ícone" class="mx-auto w-16 h-16 mb-4" />
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-400">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'BenefitCard',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.benefit-card:hover {
  transform: translateY(-5px);
}
</style>
