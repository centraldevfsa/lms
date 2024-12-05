<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import Footer from './components/AppFooter.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
