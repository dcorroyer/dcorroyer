<script>
  export default {
    props: [
      'socialLink',
      'imageUrl',
      'imageName'
    ]
  }
</script>

<template>
  <a :href="socialLink" target="_blank" class="contact-link">
    <img
      class="w-16 md:w-12"
      :src="imageUrl"
      :alt="imageName"
    />
  </a>
</template>
