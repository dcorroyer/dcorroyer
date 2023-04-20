<template>
  <section id="about" class="py-32">
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
    >
      <div
        class="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-primary"
      >
        <img
          class="w-full h-full object-cover object-center scale-125"
          src="/people.jpg"
          alt="profile"
        />
      </div>
      <div
        class="w-full md:w-1/2 text-base md:text-lg text-center md:text-left"
      >
        <h2 class="text-primary font-bold text-2xl md:text-3xl mt-5 md:mt-0">
          Hi,
          <span class="text-black dark:text-white font-normal opacity-70">
            I'm Dylan Corroyer
          </span>
        </h2>
        <p class="mb-3 mt-10 md:mt-5 opacity-80 text-justify">
          I have been a web developer for 3 years and I specialize in web apps
          creation and maintenance mostly on the
          <span class="font-semibold dark:font-bold">Back-End</span>.
        </p>
        <p class="mb-3 opacity-80 text-justify">
          I am passionate about web development and its environment, I also work
          on the
          <span class="font-semibold dark:font-bold">Front-End</span> part, as
          well as <span class="font-semibold dark:font-bold">DevOps</span> part.
        </p>
        <p class="mb-3 opacity-80 text-justify">
          If you're interested in my profile and think I can contribute to your
          project, feel free to download my
          <a class="about-link" href="/CV.pdf" target="_blank">resume</a> or
          contact me <a class="about-link" href="#contact">here</a>.
        </p>
      </div>
    </div>
  </section>
</template>
