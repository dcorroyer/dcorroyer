<script setup>
  import FooterSocialCard from './FooterSocialCard.vue';
</script>

<template>
  <footer class="w-full text-center mt-40 bg-white dark:bg-primary-gray">
    <section id="contact" class="flex flex-col gap-12 justify-center items-center py-20">
      <h2 class="text-4xl md:text-5xl font-bold text-primary mb-5">
        Contact
      </h2>
      <div class="container">
        <p class="opacity-80 text-center">
          Do you have any <span class="font-semibold dark:font-bold">Question</span> ?
          Feel free to contact me through my socials.
        </p>
      </div>
      <div class="flex flex-wrap justify-content gap-5 md:gap-10">

        <FooterSocialCard 
          socialLink="https://github.com/dcorroyer"
          imageUrl="../src/assets/images/github-black.svg"
          imageName="github"
        />

        <FooterSocialCard 
          socialLink="https://linkedin.com/in/dcorroyer"
          imageUrl="../src/assets/images/linkedin.svg"
          imageName="linkedin"
        />

        <FooterSocialCard 
          socialLink="https://discord.gg/V5HjYg2dT4"
          imageUrl="../src/assets/images/discord.svg"
          imageName="discord"
        />

      </div>
    </section>
    <h2 class="pb-10">
      &copy; Copyright {{ currentDateTime() }} - Dylan Corroyer
    </h2>
  </footer>
</template>

<script>
  export default {
    methods: {
      currentDateTime() {
        const current = new Date();
        const date = current.getFullYear();

        return date;
      }
    }
  };
</script>
