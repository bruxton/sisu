<template>
  <div class="testimonial">
    <div class="testimonial__wrap">
      <h2 class="name">{{ testimonial.name }}</h2>  
      <div class="title">{{ testimonial.title }}</div>
      <div class="quote">{{ testimonial.testimonial }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .testimonial {
    opacity: .25;
    width: 100%;
  }

  @media (min-width: 800px) {
    .testimonial {
      opacity: .25;
      width: 33.33333%;
    }    
  }

  .testimonial.is-selected {
    opacity: 1;
  }

  .testimonial__wrap {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .name {
    font-size: 1.25em;
    margin-bottom: 0.25em;
    text-transform: uppercase;
  }

  .title {
    color: #909090;
    font-size: .625em;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 2.5em;
    text-transform: uppercase;
  }

  .quote {
    font-size: 1.5em;
    font-weight: bold;
  }

  .quote::before {
    content: '\201C';
  }

  .quote::after {
    content: '\201D'
  }
</style>

