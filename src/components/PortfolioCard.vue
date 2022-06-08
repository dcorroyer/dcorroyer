<script>
  export default {
    props: [
      'title',
      'description',
      'githubLink',
      'webLink',
      'imageUrl'
    ]
  }
</script>

<template>
  <li class="portfolio-card">
    <div class="w-full md:w-1/3 h-60 p-2 md:p-5">
      <img
      class="h-full w-full object-cover md:shadow-md"
      :src="imageUrl"
      alt="portfolio"
      />
    </div>
    <div class="w-full md:w-2/3 p-5">
      <h2 class="text-2xl md:text-3xl font-bold mb-3">
        {{ title }}
      </h2>
      <p>
        {{ description }}
      </p>
      <div class="mt-8 font-semibold text-white flex items-center gap-2">
        <a :href="githubLink" target="_blank" class="portfolio-link bg-primary">
          <img
          class="w-5 h-5"
          src="/images/github-white.svg"
          alt="github"
          />
          Github
        </a>
        <a :href="webLink" target="_blank" class="portfolio-link bg-primary-gray dark:bg-primary-black">
          <img
          class="w-5 h-5"
          src="/images/web.svg"
          alt="website"
          />
          Website
        </a>
      </div>
    </div>
  </li>
</template>
