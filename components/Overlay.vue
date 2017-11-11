<template>
  <div class="cover">
    <h1 class="title">SISU</h1>
    <a 
      v-show="bottom"
      class="overlay__email" href="mailto:info@sisutechpartners.com">info@sisutechpartners.com</a>
      <a 
        v-show="bottom"
        href="https://www.linkedin.com/company/sisu-tech-partners/"
        title="Link to our LinkedIn page">
        <linked-in class="linkedin"/>
      </a>
      </div>
  </div>
</template>

<script>
import LinkedIn from '~/assets/linkedin.svg'

export default {
  components: {
    LinkedIn
  },
  data () {
    return {
      bottom: false
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        console.log(`Bottom is visible`)
      }
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', () => {
        this.bottom = this.bottomVisible()
      })
    }
  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = scrollY >= (pageHeight - (2 * visible))
      return bottomOfPage
    }
  }
}
</script>


<style scoped>
.cover {
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}

.title {
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3em;
  letter-spacing: .6875em;
  text-indent: .6875em;
}

@media (min-width: 500px) {
  .title {
    font-size: 5em;
    letter-spacing: 40px;
    text-indent: 40px;
  }
}

.overlay__email {
  color: #FFFFFF;
  font-size: .8125em;
  margin-top: 0.75em;
  text-decoration: underline;
}

.overlay__email:hover, 
.overly__email:focus {
  cursor: pointer;
  text-decoration: none;
}

.linkedin {
  position: absolute;
  bottom: 1.25em;
}
</style>
