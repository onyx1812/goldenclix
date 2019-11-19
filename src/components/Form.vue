<template>
  <section class="form">
    <div class="container">
      <button class="close" @click="showForm(false)">+</button>
      <div class="_form_5"></div>
    </div>
  </section>
</template>

<script>
  import {formFun} from '../global/formFun.js'
  export default {
    name: 'Form',
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://purpleleads.activehosted.com/f/embed.php?id=5')
      document.head.appendChild(recaptchaScript)
    },
    mixins: [formFun]
  }
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Form'
</style>
