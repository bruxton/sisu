<template>
  <svg 
    width="90" 
    height="48" 
    viewBox="0 0 235 125" 
    :style="styleObject" 
    class="icon-triangle"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M213.056 125H0L235 0v103.047c0 12.106-9.845 21.953-21.944 21.953" fill="#FFF"/>
  </svg>
</template>

<script>
export default {
  props: ['styleObject']
}
</script>


<style scoped>
  .icon-triangle {
    mix-blend-mode: difference;
    position: fixed;
    z-index: 0;
  }

  @media (min-width: 800px) {
    .icon-triangle {
      width: 235px;
      height: 125px;
    }
  }

  @media (min-width: 1300px) {
    .icon-triangle {
      z-index: 1;
    }
  }
</style>
