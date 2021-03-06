<template>
  <div>
    <main class="site-content">
      <div class="tagline">
        <div class="container">
          <p class="tagline__copy">
            The people’s people. It’s simple. SISU is upfront, honest, and knows what matters most.
          </p>
          <p class="tagline__copy">
            We value each relationship and are committed to being direct and transparent with every person we meet. By putting people first, we develop lasting relationships with candidates and clients who want to do more than just fit in. At SISU we build partnerships that stand out.
          </p>
          <p class="tagline__copy">
            We get the job of finding jobs done.
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
                  <p>The three W’s—where you’ve been, what you want and where you’re going—guide everything we do. We take your experience, goals and passions as seriously as we take ours.</p>
                  <p>Done properly, recruiting can be purposeful and enjoyable, and that’s the experience we strive to provide our candidates. It’s more than just harmonizing skill sets with opportunities. It’s about creating a lasting partnership where everyone wins.</p>
                  <p>If you’re looking to build and cultivate a relationship, we’re your people.</p>
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
                  <p>SISU was founded on a human-centered approach to recruiting. This means focusing on the relationships that matter most and only delivering the best candidates for your opportunity.</p>
                  <p>Just because the job your engineers do can be complex doesn’t mean hiring has to be. We work hard to recruit candidates that fit into your company’s culture—working through hard challenges with you, being productive, and enjoying the rewarding times together.</p>
                  <p>We are in it for the long haul, and our candidates are too.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <overlay/>
    <triangle :style="topTriangleStyles"/>
    <triangle :style="bottomTriangleStyles"/>
  </div>
</template>

<script>
import Triangle from '~/components/Triangle.vue'
import Overlay from '~/components/Overlay.vue'
import Rellax from 'rellax'
import TestimonialCarousel from '~/components/TestimonialCarousel.vue'

export default {
  components: {
    Triangle, TestimonialCarousel, Overlay
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

<style lang="scss" scoped>
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
  font-size: 1.75em;
  font-weight: bold;
  padding-top: 1.25em;
  padding-bottom: 1.25em;
  position: relative;
  z-index: 1;

  @media (min-width: 800px) {
    font-size: 2.1875em; 
    padding-top: 3.75em;
    padding-bottom: 2.5em;
  }
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
  padding-bottom: 3.75em;
  z-index: 1;

  @media (min-width: 800px) {
    font-size: 1.625em;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.clients-candidates__header {
  font-size: .8125em;
  margin-bottom: 1.25em;
  text-transform: uppercase;

  @media (min-width: 640px) {
    font-size: 1.125em;
  }
}

.clients-candidates__small-border {
  max-width: 65px;
  height: 4px;
  background-color: #000000;
  border-radius: 1em;
  margin-left: auto;
  margin-right: auto;
  transform: skewY(-28deg);

  @media (min-width: 1024px) {
    display: none;
  }
}

.candidates {
  position: relative;
  margin-bottom: 3.75em;
  overflow: hidden;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }

  .container {
    @media (min-width: 1024px) {
      padding-right: 25%;
    }

    @media (min-width: 1400px) {
      padding-right: 10%;
    }
  }
}

.clients {
  position: relative;
  z-index: 20;
  background-color: white;

  @media (min-width: 1024px) {
    border-top: 13px solid #000;
    margin-bottom: -10%;
    overflow: hidden;
    transform: skewY(-28deg);
  }

  > div {
    margin-top: 70px;

    @media (min-width: 1024px) {
      margin-top: 0;
      transform: skewY(28deg);
    }
  }

  .container {
    @media (min-width: 1024px) {
      padding-left: 25%;
      position: relative;
    }

    @media (min-width: 1400px) {
      padding-left: 10%;
    }

    p:last-of-type {
      @media (min-width: 1024px) {
        padding-bottom: 45%;
      }
    }
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
