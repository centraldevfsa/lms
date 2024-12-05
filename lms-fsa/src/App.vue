<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <router-view />
    <Footer />
  </div>
</template>



<script>
import Navbar from './components/AppNavbar.vue';
import Footer from './components/AppFooter.vue';
import Sidebar from './components/AppSidebar.vue';

export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
  },
};
</script>
