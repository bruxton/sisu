<template>
  <div class="testimonials">
    <testimonial-item
      v-for="(testimonial, index) in testimonials"
      :key="index"
      :testimonial="testimonial" 
      ></testimonial-item>
  </div>
</template>

<script>
import TestimonialItem from './TestimonialItem.vue'

export default {
  components: { TestimonialItem },
  data () {
    return {
      options: {
        wrapAround: true
      },
      testimonials: [
        {
          name: 'John H.',
          title: 'Former Senior Engineer, Google',
          testimonial: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatso'
        },
        {
          name: 'James S.',
          title: 'Former Senior Engineer, Google',
          testimonial: 'Veggies es bonus vobis, proinde vos postulo.'
        },
        {
          name: 'Sarah K.',
          title: 'Former Senior Engineer, Google',
          testimonial: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatso'
        },
        {
          name: 'John H.',
          title: 'Former Senior Engineer, Google',
          testimonial: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatso'
        },
        {
          name: 'John H.',
          title: 'Former Senior Engineer, Google',
          testimonial: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatso'
        }
      ]
    }
  },
  mounted () {
    if (process.browser) {
      const Flickity = require('flickity')
      const flickity = () => new Flickity(this.$el, this.options)
      flickity()
    }
  }
}
</script>

<style>
  .testimonials {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }

  .testimonials .flickity-prev-next-button {
    background-color: transparent;
    display: none;
  }

  @media (min-width: 1000px) {
    .testimonials .flickity-prev-next-button {
      display: block;
    }

    .testimonials .flickity-page-dots {
      display: none;
    }
  }
</style>
