<script>
export default {
  props: {
    visible: {
      type: Boolean, // Spécifiez le type de la prop
      required: true,
    },
  },
}
</script>

<template>
  <div class="flex items-center justify-between gap-3 w-full" :class="{ visible: visible }">
    <div class="bg-gradient-to-r from-primary/0 to-primary/60 flex-grow h-0.5"></div>
    <div class="bg-primary/60 h-0.5 w-4"></div>
    <div class="bg-gradient-to-r from-primary/60 to-primary/0 flex-grow h-0.5"></div>
  </div>
</template>
