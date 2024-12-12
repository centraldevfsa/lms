<template>
    <div>
      <StudentDashboard v-if="user.role === 'student'" />
      <AdminDashboard v-else-if="user.role === 'admin'" />
      <p v-else>Tipo de usuário desconhecido.</p>
    </div>
  </template>
  
  <script>
  import StudentDashboard from "@/components/StudentDashboard.vue";
  import AdminDashboard from "@/views/AdminDashboard.vue";
  
  export default {
    name: "DashboardWrapper",
    components: {
      StudentDashboard,
      AdminDashboard
    },
    computed: {
      user() {
        return this.$store.state.user;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para o wrapper do dashboard */
  </style>
  