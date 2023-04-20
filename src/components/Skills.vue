<script setup>
import SkillsCard from "./SkillsCard.vue";
</script>

<template>
  <section id="about" class="py-32 mb-20 md:mb-0">
    <div class="text-center">
      <h2 class="text-primary font-bold text-4xl md:text-3xl mb-14">
        Here
        <span class="text-black dark:text-white font-normal opacity-70">
          are my skills
        </span>
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-24 md:gap-12">
        <SkillsCard
          exp="Experience 3 years"
          imageUrl="/php.png"
          imageName="php"
        />

        <SkillsCard
          exp="Experience 3 years"
          imageUrl="/symfony.png"
          imageName="symfony"
        />

        <SkillsCard
          exp="Experience 1 year"
          imageUrl="/laravel.png"
          imageName="laravel"
        />

        <SkillsCard
          exp="Experience 2 years"
          imageUrl="/javascript.png"
          imageName="javascript"
        />

        <SkillsCard
          exp="Some knowledge"
          imageUrl="/reactjs.png"
          imageName="react"
        />

        <SkillsCard
          exp="Some knowledge"
          imageUrl="/vuejs.png"
          imageName="vue"
        />

        <SkillsCard
          exp="Some knowledge"
          imageUrl="/tailwindcss.png"
          imageName="tailwindcss"
        />

        <SkillsCard
          exp="Experience 3 years"
          imageUrl="/docker.png"
          imageName="docker"
        />
      </div>
    </div>
  </section>
</template>
