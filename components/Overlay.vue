<template>
  <div class="cover" :class="{ atBottom: bottom }">
    <h1 
    v-show="!bottom"
    class="title"><logo/></h1>
    <contact-form v-show="bottom"></contact-form>
    <app-footer v-show="bottom"></app-footer>
  </div>
</template>

<script>
import Logo from '~/assets/logo.svg'
import AppFooter from '~/components/AppFooter.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    AppFooter, ContactForm, Logo
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

$fullOverlay: 640px;

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
  margin: 0 1.25em;

  @media (max-width: 640px) {
    max-width: 180px;
  }

  svg {
    height: auto;
    max-width: 100%;
  }
}
</style>
