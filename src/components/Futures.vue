<template>
  <section class="futures">
    <div class="container">
      <h2 class="zoomIn" v-scroll="handleScroll">How We Do It</h2>
      <div class="row">
        <div class="col zoomIn" v-scroll="handleScroll" >
          <img src="../assets/img/futures_1.jpg" alt="">
          <p>Consultation</p>
        </div>
        <div class="col zoomIn" v-scroll="handleScroll">
          <img src="../assets/img/futures_2.jpg" alt="">
          <p>Competitor analysis</p>
        </div>
        <div class="col zoomIn" v-scroll="handleScroll">
          <img src="../assets/img/futures_3.jpg" alt="">
          <p>Strategy & Planning</p>
        </div>
        <div class="col zoomIn" v-scroll="handleScroll">
          <img src="../assets/img/futures_4.jpg" alt="">
          <p>Creative Guidance</p>
        </div>
        <div class="col zoomIn" v-scroll="handleScroll">
          <img src="../assets/img/futures_5.jpg" alt="">
          <p>Media Buying</p>
        </div>
        <div class="col zoomIn" v-scroll="handleScroll">
          <img src="../assets/img/futures_6.jpg" alt="">
          <p>Reporting</p>
        </div>
        <div class="col zoomIn" v-scroll="handleScroll">
          <img src="../assets/img/futures_7.jpg" alt="">
          <p>Communication</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'
export default {
  name: 'Futures',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Futures'
</style>
