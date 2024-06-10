<script>
export default {
  props: {
    exp: {
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
  <div class="skill" :data-text="exp">
    <img class="w-16" :src="imageUrl" :alt="imageName" />
  </div>
</template>
