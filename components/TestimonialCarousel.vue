<template>
  <div>
    <div v-for="(testimonial, index) in testimonials" :key="index">
      <testimonial-item :testimonial="testimonial" cellSelector="testimonialCell"/>
    </div>
  </div>
</template>

<script>
import TestimonialItem from './TestimonialItem.vue'

export default {
  components: { TestimonialItem },
  data () {
    return {
      options: {
        cellSelector: '[data-cell="testimonialCell"]',
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
      console.log(this.$el)
      const Flickity = require('flickity')
      const flickity = () => new Flickity(this.$el, this.options)
      flickity()
    }
  }
}
</script>

