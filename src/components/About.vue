<template>
  <section id="about" class="py-32">
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <div class="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-primary">
        <img
          class="w-full h-full object-cover opacity-90"
          src="../assets/images/people.jpg"
          alt="profile"
        />
      </div>
      <div class="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
        <h2 class="text-primary font-bold text-2xl md:text-3xl mb-3">
          Hi, I'm Dylan Corroyer
        </h2>
        <p class="mb-3 opacity-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Tempore at aliquam ea magni vitae cum, unde tempora,
          nulla voluptates asperiores voluptatum provident non aperiam accusantium soluta illo itaque placeat! Facere!
        </p>
        <p class="opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum temporibus quae harum sint enim quam nemo explicabo architecto numquam.
          Sapiente beatae adipisci eligendi tempora deleniti impedit labore incidunt, laborum esse?
        </p>
      </div>
    </div>
    <div class="mt-32 text-center">
      <h2 class="text-primary text-3xl md:text-4xl font-bold mb-14">
        My Skills
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-24 md:gap-12">
        <div class="skill" data-text="Experience 3 years">
          <img
            class="w-16"
            src="../assets/images/php.png"
            alt="php"
          />
        </div>
        <div class="skill" data-text="Experience 3 years">
          <img
            class="w-16"
            src="../assets/images/symfony.png"
            alt="symfony"
          />
        </div>
        <div class="skill" data-text="Experience 2 years">
          <img
            class="w-16"
            src="../assets/images/javascript.png"
            alt="javascript"
          />
        </div>
        <div class="skill" data-text="Some knowledge">
          <img
            class="w-16"
            src="../assets/images/reactjs.png"
            alt="react"
          />
        </div>
        <div class="skill" data-text="Learning in progress">
          <img
            class="w-16"
            src="../assets/images/vuejs.png"
            alt="vue"
          />
        </div>
        <div class="skill" data-text="Learning in progress">
          <img
            class="w-16"
            src="../assets/images/nuxt.png"
            alt="nuxt"
          />
        </div>
        <div class="skill" data-text="Learning in progress">
          <img
            class="w-16"
            src="../assets/images/tailwindcss.png"
            alt="tailwindcss"
          />
        </div>
        <div class="skill" data-text="Experience 2 years">
          <img
            class="w-16"
            src="../assets/images/docker.png"
            alt="docker"
          />
        </div>
      </div>
    </div>
  </section>
</template>
