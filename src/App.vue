<script setup>
import About from './components/AboutComponent.vue'
import Border from './components/BorderComponent.vue'
import Footer from './components/FooterComponent.vue'
import Home from './components/HomeComponent.vue'
import Navbar from './components/NavbarComponent.vue'
import Portfolio from './components/PortfolioComponent.vue'
import Skills from './components/SkillsComponent.vue'
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
