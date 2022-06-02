<script setup>
  import About from './components/About.vue';
  import Border from './components/Border.vue';
  import Home from './components/Home.vue';
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <main class="container">
    <Home />
    <About />
    <Border />
  </main>
</template>
