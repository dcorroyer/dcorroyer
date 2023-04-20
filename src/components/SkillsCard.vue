<script>
  export default {
    props: [
      'exp',
      'imageUrl',
      'imageName'
    ]
  }
</script>

<template>
  <div class="skill" :data-text="exp">
    <img
      class="w-16"
      :src="imageUrl"
      :alt="imageName"
    />
  </div>
</template>
