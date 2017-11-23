<template>
  <footer class="footer">
    <a href="https://www.linkedin.com/company/sisu-tech-partners/" title="Link to our LinkedIn page" class="linkedin">
      <linked-in />
    </a>
    <a class="overlay__email" href="mailto:info@sisutechpartners.com">info@sisutechpartners.com</a>
    <a href="tel:3106667570">+1 310.666.7570</a>
    <p class="legal">&copy; {{ currentYear }} SISU Tech Partners</p>
  </footer>
</template>

<script>
import LinkedIn from '~/assets/linkedin.svg'

export default {
  components: {
    LinkedIn
  },
  computed: {
    currentYear () {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>

$footerBp: '640px';

.footer {
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: .75em;
  max-width: 1280px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: $footerBp) {
    bottom: 0;
    flex-direction: row;
    font-size: .875em;
    left: 0;
    margin-top: auto;
    padding-left: 80px;
    padding-right: 80px;
    position: absolute;
    margin-bottom: 1.25em;
  }

  > * {
    margin-bottom: .625em;

    @media (min-width: $footerBp) {
      margin-bottom: 0;
      margin-right: 2.5em;
    }
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

.linkedin {
  @media (min-width: $footerBp) {
    order: 2;
  }
  svg {
    height: 16px;
    width: 16px;

    @media (min-width: $footerBp) {
      height: 24px;
      width: 24px;
    }
  }
}

.legal {
  color: #AAA;
  font-size: .75em;
  font-weight: bold;
  margin-bottom: 0;

   @media (min-width: $footerBp) {
    color: #FFFFFF;
    font-size: 1em;
    font-weight: normal;
    order: -1;
  }
}
</style>

