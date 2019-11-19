<template>
  <section class="wehave">
    <div class="container">
      <h2 class="fadeInUp" v-scroll="handleScroll">We have spent 10s of millions of our money (profitably) before we started managing anyone else’s.</h2>
      <p class="fadeInUp" v-scroll="handleScroll">We were first affiliates and brand owners before an agency, so we understand making offers work. <br><br> The founders of GoldenClix have ran both lead generation and ecommerce offers to multiple million-dollar profits across Facebook, Google, Native ads and anywhere else a user can click.</p>
      <button class="btn fadeInUp" v-scroll="handleScroll" @click="showForm(true)">Let's Work Together</button>
    </div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'
export default {
  name: 'Wehave',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Wehave'
</style>
