<template>
  <footer class="w-full text-center mt-40 bg-white dark:bg-primary-gray">
    <section id="contact" class="flex flex-col gap-12 justify-center items-center py-20">
      <h2 class="text-4xl md:text-5xl font-bold text-primary">
        Contact
      </h2>
      <div class="flex flex-wrap justify-content gap-5 md:gap-10">
        <a href="#" class="contact-link bg-blue-500">
          <img
            src="../assets/images/icon-facebook.svg"
            alt="facebook"
          />
        </a>
        <a href="#" class="contact-link bg-pink-500">
          <img
            src="../assets/images/icon-instagram.svg"
            alt="instagram"
          />
        </a>
        <a href="#" class="contact-link bg-blue-600">
          <img
            src="../assets/images/icon-telegram.svg"
            alt="telegram"
          />
        </a>
        <a href="#" class="contact-link bg-blue-400">
          <img
            src="../assets/images/icon-twitter.svg"
            alt="twitter"
          />
        </a>
        <a href="#" class="contact-link bg-green-400">
          <img
            src="../assets/images/icon-whatsapp.svg"
            alt="whatsapp"
          />
        </a>
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
