<script setup>
  import About from './components/About.vue';
  import Border from './components/Border.vue';
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue';
  import Navbar from './components/Navbar.vue';
  import Portfolio from './components/Portfolio.vue';
  import Skills from './components/Skills.vue';
</script>

<template>
  <Navbar />
  <main class="container">
    <Home />
    <Border visible="invisible md:visible" />
    <About />
    <Border />
    <Skills />
    <Border />
    <Portfolio />
  </main>
  <Footer />
</template>
