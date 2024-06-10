<script>
export default {
  props: {
    socialLink: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <a :href="socialLink" target="_blank" class="contact-link">
    <img class="w-16 md:w-12" :src="imageUrl" :alt="imageName" />
  </a>
</template>
