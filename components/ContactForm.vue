<template>
  <div class="container">
    <h2 class="form-header">Let's Get Started!</h2>
    <p class="form-cta">Send us a message and we'll get back to you ASAP</p>
    <form
      class="contact"
      v-if="!showSuccessMessage"
      @submit.prevent="submitForm">
      <label for="name">
        <div class="contact__label">Name</div>
        <input type="text" name="name" v-model="name" placeholder="Name" required/>
      </label>
      <label for="_replyto">
        <div class="contact__label">Email</div>
        <input type="email" name="_replyto" v-model="email" required placeholder="Email"/>
      </label>
      <label for="phone">
        <div class="contact__label">Phone</div>
        <input type="tel" name="phone" v-model="phone" placeholder="Phone"/>
      </label>
      <label class="is-textarea" for="messaage">
        <div class="contact__label">Message</div>
        <textarea name="message" cols="30" rows="5" v-model="message" required placeholder="Your Message"></textarea>
      </label>
      <input type="text" name="_gotcha" style="display:none"/>
      <button class="button hollow">{{ submitButton }}</button>
    </form>
    <div 
      v-if="showSuccessMessage"
      class="success-message">
      Thank you for contacting us! We will get in touch with you as soon as possible.
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      submitButton: 'Send Message',
      showSuccessMessage: false
    }
  },
  methods: {
    resetFormData () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
    },
    async submitForm () {
      this.submitButton = 'Sending...'
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }
      try {
        const response = await this.$axios.$post('https://formspree.io/info@sisutechpartners.com', data)
        if (response.success === 'email sent') {
          this.resetFormData()
          this.showSuccessMessage = true
        } else {
          alert('Oops! Looks like something went wrong. Please try again')
          console.log(`Error: ${response}`)
          this.submitButton = 'Send Message'
        }
      } catch (e) {
        alert('Oops! There was an error submitting your form. Please try again.')
        console.error(e)
        this.submitButton = 'Send Message'
      }
    }
  }
}
</script>


<style lang="scss" scoped>

$fullForm: 700px;

.form-header {
  color: #FFF;
  font-size: 1.375em;
  margin-top: 1em;
  margin-bottom: 0.25em;
  text-transform: uppercase;

  @media (min-width: $fullForm) {
    font-size: 2.1875em;
    margin-top: 0;
  }
}

.form-cta {
  color: #FFF;
  font-size: .875em;
  font-weight: bold;
  margin-bottom: 1.25em;

  @media (min-width: $fullForm) {
    font-size: 1.25em;
    margin-bottom: 2.5em;
  }
}

.success-message {
  color: #FFF;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 2.5em;

  @media (min-width: $fullForm) {
    font-size: 2em;
    margin-bottom: 0;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25em;

  @media (min-width: $fullForm) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0;
  }

  label:not(.is-textarea) {
    @media (min-width: $fullForm) {
      flex: 0 1 auto;
      width: calc(33.3333% - 1.25em);
    }
  }

  .button {
    @media (max-width: $fullForm) {
      font-size: 0.875em;
    }
  }
}

label {
  color: #fff;
  flex: 1 0 100%;
  margin-bottom: 1.25em;
}

.contact__label {
  display: none;
  margin-bottom: .625em;

  @media (min-width: $fullForm) {
    display: inline-block;
  }
}

input, 
textarea {
  width: 100%;

  @media (max-width: $fullForm) {
    padding-bottom: .25em;
    padding-top: .25em;
  }
}
</style>

