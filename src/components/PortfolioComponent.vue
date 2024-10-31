<script setup>
import PortfolioCard from './PortfolioCardComponent.vue';
</script>

<template>
  <section id="portfolio" class="pt-32">
    <h2 class="portfolio-heading">
      Here <span class="text-black dark:text-white font-normal opacity-70">is my work</span>
    </h2>
    <ul class="w-full md:w-5/6 space-y-10 py-5 m-auto">
      <PortfolioCard
        title="MyBudget - Budgeting app"
        description="A budgeting app made with Symfony 6 and React 18 (TypeScript)."
        github-link="https://github.com/dcorroyer/mybudget"
        web-link="https://mybudget.dcorroyer.fr"
        image-url="/mybudget.png"
      />
    </ul>

    <ul class="w-full md:w-5/6 space-y-10 py-5 m-auto">
      <PortfolioCard
        title="Acidarts - Portfolio"
        description="A portfolio made for a 3D freelance artist who wanted to present his work."
        github-link="https://github.com/dcorroyer/acidarts"
        web-link="https://acidarts.fr"
        image-url="/acidarts.jpg"
      />
    </ul>

    <ul class="w-full md:w-5/6 space-y-10 py-5 m-auto">
      <PortfolioCard
        title="Bnazon - Portfolio"
        description="A portfolio made for a 3D concept artist who wanted to present his work."
        github-link="https://github.com/dcorroyer/bnazon"
        web-link="https://bnazon.netlify.app"
        image-url="/bnazon.jpg"
      />
    </ul>
  </section>
</template>
