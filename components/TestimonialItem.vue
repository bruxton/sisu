<template>
  <div class="testimonial" :data-cell="cellSelector">{{ testimonial.name }}</div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    },
    cellSelector: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .testimonial {
    width: 33.333333%;
  }
</style>

