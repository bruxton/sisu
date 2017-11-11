<template>
  <footer class="footer">
    <a 
      class="overlay__email" href="mailto:info@sisutechpartners.com">info@sisutechpartners.com</a>
    <a 
      href="https://www.linkedin.com/company/sisu-tech-partners/"
      title="Link to our LinkedIn page">
      <linked-in class="linkedin"/>
    </a>
  </footer>
</template>

<script>
import LinkedIn from '~/assets/linkedin.svg'

export default {
  components: {
    LinkedIn
  }
}
</script>

<style scoped>
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
  left: 50%;
  transform: translateX(-50%);
}
</style>

