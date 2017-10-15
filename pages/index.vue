<template>
  <div>
    <main class="site-content">
      <div class="tagline">
        <div class="container">
          <p class="tagline__copy">
            We love our clients, but quite frankly we just love our candidates much more. We promise to create a remarkable experience for all of our candidates while maintaining an uncompromising commitment to quality.
          </p>
          <p class="tagline__copy">
            These philosophies are not just rhetoric. Just ask anyone at our company. Our core values are not words on the wall or pretty phrases on a web page, they are the very soul of our company, and this is who we are.
          </p>
        </div>
      </div>
      <div class="carousel">
        <testimonial-carousel/>
      </div>
      <div class="clients-candidates">
          <div class="candidates">
            <div>
              <div class="rellax-candidates" data-rellax-percentage=".5" data-rellax-speed="5">
                <div class="container">
                  <h2 class="clients-candidates__header">Candidates</h2>
                  <p>Finding the right company and job is incredibly stressful....that’s where we come in with industry knowledge to find you the right home. Your SISU personal recruiter will make each interaction relevant to your needs. We focus on your interests, hobbies, passions, and life-goals.</p>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
                  <p style="margin-bottom: 0">Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="clients-candidates__small-border" role="presentation">&nbsp;</div>
          <div class="clients">
            <div>
              <div class="rellax-clients" data-rellax-percentage=".5" data-rellax-speed="5">
                <div class="container">
                  <h2 class="clients-candidates__header">Clients</h2>
                  <p>Gifted talent will always have a wealth of compelling opportunities—we work behind the scenes and present you with the most curated talent. Using our communication and honesty first approach, we successfully pair great engineers with your culture.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cras sagittis finibus massa quis pretium. Aliquam maximus dui in lacus commodo, eget facilisis nunc ultricies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <overlay/>
    <logo :style="topTriangleStyles"/>
    <logo :style="bottomTriangleStyles"/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Overlay from '~/components/Overlay.vue'
import Rellax from 'rellax'
import TestimonialCarousel from '~/components/TestimonialCarousel.vue'

export default {
  components: {
    Logo, TestimonialCarousel, Overlay
  },
  data () {
    return {
      bottomTriangleStyles: {
        bottom: '10px',
        right: '10px'
      },
      topTriangleStyles: {
        top: '10px',
        left: '10px',
        transform: 'rotate(180deg)'
      },
      movement: 0
    }
  },
  mounted () {
    const clientRellax = () => new Rellax('.rellax-clients')
    const candidateRellax = () => new Rellax('.rellax-candidates')
    clientRellax()
    candidateRellax()
  }
}
</script>

<style scoped>
.site-content {
  position: relative;
  min-height: 100vh;
  margin-top: 100vh;
  margin-bottom: 100vh;
}

.container {
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.tagline {
  background-color: #fff;
  font-size: 2.1875em;
  font-weight: bold;
  padding-top: 3.75em;
  padding-bottom: 2.5em;
  position: relative;
  z-index: 1;
}

.carousel {
  background-color: #EFEFEF;
  position: relative;
  z-index: 2;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}

.clients-candidates {
  position: relative;
  background-color: #FFF;
  overflow: hidden;
  font-size: 1.25em;
  font-weight: bold;
  padding-top: 3.75em;
  z-index: 1;
}

@media (min-width: 800px) {
  .clients-candidates {
    font-size: 1.75em;
    padding-top: 0;
  }
}

.clients-candidates__header {
  font-size: .8125em;
  margin-bottom: 1.25em;
  text-transform: uppercase;
}

.clients-candidates__small-border {
  max-width: 65px;
  height: 4px;
  background-color: #000000;
  border-radius: 1em;
  margin-left: auto;
  margin-right: auto;
  transform: skewY(-28deg);
}

@media (min-width: 1024px) {
  .clients-candidates__small-border {
    display: none;
  }
}

.candidates {
  position: relative;
  margin-bottom: 3.75em;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .candidates {
    margin-bottom: 0;
  }
}

@media (min-width: 1024px) {
  .candidates .container {
    padding-right: 25%;
  }
}

.clients {
  position: relative;
  z-index: 20;
  background-color: white;
  margin-bottom: -10%;
}

.clients > div {
  margin-top: 70px;
}

@media (min-width: 1024px) {
  .clients {
    border-top: 13px solid #000;
    overflow: hidden;
    transform: skewY(-28deg);
  }

  .clients > div {
    margin-top: 0;
    transform: skewY(28deg);
  }

  .clients .container {
    position: relative;
    padding-left: 25%;
  }

  .clients .container p:last-of-type {
    padding-bottom: 45%;
  }
}

.tagline__copy:last-of-type {
  margin-bottom: 0;
}

.another-thing {
  margin-bottom: 100vh;
  z-index: 10;
  position: relative;
  background-color: #fff;
}

.logo__bottom {
  position: fixed;
  right: 0;
  bottom: 0;
}

.logo__top {
  position: fixed;
  top: 10px;
  left: 10px;
}

.logo__top svg {
  transform: rotate(180deg);
}

@media (max-width: 1024px) { 
  .rellax-clients, 
  .rellax-candidates { 
    transform: translate3d(0,0,0) !important; 
  } 
}
</style>
