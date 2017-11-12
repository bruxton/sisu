<template>
  <div class="cover" :class="{ atBottom: bottom }">
    <h1 
    v-show="!bottom"
    class="title">SISU</h1>
    <contact-form v-show="bottom"></contact-form>
    <app-footer v-show="bottom"></app-footer>
  </div>
</template>

<script>
import LinkedIn from '~/assets/linkedin.svg'
import AppFooter from '~/components/AppFooter.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    LinkedIn, AppFooter, ContactForm
  },
  data () {
    return {
      bottom: false
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

<style lang="scss" scoped>
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

  &.atBottom {
    @media (min-width: 640px) {
      align-items: flex-start;
    }
  }

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
</style>
