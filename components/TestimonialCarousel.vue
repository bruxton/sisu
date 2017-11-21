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
          name: '',
          title: '',
          testimonial: 'I felt that there was a constant flow of information and communication in both directions...a huge thank you...'
        },
        {
          name: '',
          title: '',
          testimonial: '...interacted with employers on my behalf and facilitated the process to ensure that the hiring process was smooth and with a quick turn around.'
        },
        {
          name: '',
          title: '',
          testimonial: '...I was able to improve the initial offer significantly and made sure the offer covered or exceeded my previous benefits.'
        },
        {
          name: '',
          title: '',
          testimonial: '...both responsive and involved, and made the search and eventual transition quick, directed and efficient.'
        },
        {
          name: '',
          title: '',
          testimonial: '...gave very prompt and timely feedback after every interview and kept me updated at all times...often calling after hours or on weekends if needed.'
        },
        {
          name: '',
          title: '',
          testimonial: '...gave me as much information as possible, and was always responsive to emails/texts.'
        },
        {
          name: '',
          title: '',
          testimonial: '...arranged for me up to interview with a few companies that fit my interests, and never gave my information to anyone without my permission.'
        },
        {
          name: '',
          title: '',
          testimonial: '...responded to all questions immediately, and helped arrange my onsite interviews and travelling.'
        },
        {
          name: '',
          title: '',
          testimonial: 'Definitely went further than I've ever seen a recruiter go before.'
        },
        {
          name: '',
          title: '',
          testimonial: '...was instrumental in finding me a job which was a perfect fit in culture, skills, and goals.'
        },
        {
          name: '',
          title: '',
          testimonial: '...introduced me to several HFT companies, and was instrumental in facilitating phone and onsite interviews.'
        },
        {
          name: '',
          title: '',
          testimonial: 'Perhaps most importantly, it was important...that I found the right fit - I certainly appreciate that my goals were a priority...'
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
