<template>
  <svg width="235" height="125" viewBox="0 0 235 125" v-bind:style="styleObject" xmlns="http://www.w3.org/2000/svg">
    <path d="M213.056 125H0L235 0v103.047c0 12.106-9.845 21.953-21.944 21.953" fill="#FFF"/>
  </svg>
</template>

<script>
export default {
  props: ['styleObject']
}
</script>


<style scoped>
  svg {
    mix-blend-mode: difference;
    position: fixed;
    z-index: 10;
  }
</style>
