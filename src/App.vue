<script setup>
  import About from './components/About.vue';
  import Border from './components/Border.vue';
  import BorderInverted from './components/BorderInverted.vue';
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue';
  import Navbar from './components/Navbar.vue';
  import Portfolio from './components/Portfolio.vue';
</script>

<template>
  <Navbar />
  <main class="container">
    <Home />
    <BorderInverted />
    <About />
    <Border />
    <Portfolio />
  </main>
  <Footer />
</template>
