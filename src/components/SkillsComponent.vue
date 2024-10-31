<script setup>
import SkillsCard from './SkillsCardComponent.vue';
</script>

<template>
  <section id="about" class="py-32 mb-20 md:mb-0">
    <div class="text-center">
      <h2 class="text-primary font-bold text-4xl md:text-3xl mb-14">
        Here
        <span class="text-black dark:text-white font-normal opacity-70"> are my skills </span>
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-24 md:gap-12">
        <SkillsCard exp="Experience 5 years" image-url="/symfony.png" image-name="symfony" />

        <SkillsCard
          exp="Experience 3 years"
          image-url="/apiplatform.png"
          image-name="apiplatform"
        />

        <SkillsCard exp="Experience 2 years" image-url="/reactjs.png" image-name="react" />

        <SkillsCard exp="Experience 2 years" image-url="/tailwindcss.png" image-name="tailwindcss" />

        <SkillsCard exp="Experience 4 years" image-url="/docker.png" image-name="docker" />

        <SkillsCard exp="Experience 5 years" image-url="/mysql.png" image-name="mysql" />

        <SkillsCard exp="Experience 2 years" image-url="/mongodb.png" image-name="mongodb" />
      </div>
    </div>
  </section>
</template>
