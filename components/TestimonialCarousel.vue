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
        wrapAround: true,
        arrowShape: 'M0,0 L0,31.9712324 C0,37.7216978 4.67588349,42.4024218 10.4263489,42.4024218 C4.67588349,42.4024218 0,47.0783053 0,52.8239302 L0,84.8000031 L79.9982676,42.4024218 L0,0 Z'
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

  .testimonials .flickity-prev-next-button svg {
    transform: rotate(180deg);
  }

  .flickity-prev-next-button.previous {
    left: 0;
  }

  .flickity-prev-next-button.next {
    right: 0;
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
