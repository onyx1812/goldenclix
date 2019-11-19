<template>
  <section class="banner">
    <video class="video" src="../assets/video/video-bg.mp4" autoplay loop muted poster="../assets/img/video-bg.jpg"></video>
    <div class="container">
      <h1>You bring us your brand <br> We bring you the profit</h1>
      <p>We use data, creativity and experience to find profit, while protect you from wasting adspend</p>
      <button class="btn" @click="showForm(true)">Get A Free Consultation</button>
    </div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'

export default {
  name: 'Banner',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Banner'
</style>
