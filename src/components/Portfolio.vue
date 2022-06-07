<script setup>
  import PortfolioCard from './PortfolioCard.vue';
</script>

<template>
  <section id="portfolio" class="pt-32">
    <h2 class="portfolio-heading">
      Here <span class="text-black dark:text-white font-normal opacity-70">is my work</span>
    </h2>
    <ul class="w-full md:w-5/6 space-y-10 py-5 m-auto">
      <PortfolioCard 
        title="Acidarts - Portfolio"
        description="A portfolio made for a 3D freelance artist who wanted to present his work."
        githubLink="https://github.com/dcorroyer/acidarts"
        webLink="https://acidarts.fr"
        imageUrl="./src/assets/images/acidarts.jpg"
      />
    </ul>
  </section>
</template>
