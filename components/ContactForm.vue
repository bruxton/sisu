<template>
  <div class="container">
    <h2 class="form-header">Let's Get Started!</h2>
    <p class="form-cta">Send us a message and we'll get back to you ASAP</p>
    <form class="contact" @submit.prevent="submitForm">
      <label for="name">
        <div class="contact__label">Name</div>
        <input type="text" name="name" v-model="name"/>
      </label>
      <label for="_replyto">
        <div class="contact__label">Email</div>
        <input type="email" name="_replyto" v-model="email"/>
      </label>
      <label for="phone">
        <div class="contact__label">Phone</div>
        <input type="tel" name="phone" v-model="phone"/>
      </label>
      <label class="is-textarea" for="messaage">
        <div class="contact__label">Message</div>
        <textarea name="message" cols="30" rows="10" v-model="message"></textarea>
      </label>
      <input type="text" name="_gotcha" style="display:none"/>
      <button class="button hollow">{{ submitButton }}</button>
    </form>
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
      submitButton: 'Submit'
    }
  },
  methods: {
    async submitForm () {
      try {
        const response = await this.$axios.$post('https://formspree.io/jacob.arriola@gmail.com',
          {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
          }
        )
        console.log(response)
      } catch (e) {
        alert('Oops! There was an error submitting your form. Please try again.')
        console.error(e)
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
  margin-bottom: 0.25em;
  text-transform: uppercase;

  @media (min-width: $fullForm) {
    font-size: 2.1875em;
  }
}

.form-cta {
  color: #FFF;
  font-size: .875em;
  font-weight: bold;
  margin-bottom: 2.5em;

  @media (min-width: $fullForm) {
    font-size: 1.25em;
  }
}

.contact {
  display: flex;
  flex-direction: column;

  @media (min-width: $fullForm) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  label:not(.is-textarea) {
    @media (min-width: $fullForm) {
      flex: 0 1 auto;
      width: calc(33.3333% - 1.25em);
    }
  }
}

label {
  color: #fff;
  flex: 1 0 100%;
  margin-bottom: 1.25em;
}

input, 
textarea {
  width: 100%;
}
</style>

