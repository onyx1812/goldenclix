<template>
  <section class="sponsors">
  	<div class="container">
  		<div class="row">
        <div><img class="zoomIn" v-scroll="handleScroll" src="../assets/img/facebook.png" alt=""></div>
        <div><img class="zoomIn" v-scroll="handleScroll" style="transition-delay: .1s;" src="../assets/img/google.png" alt=""></div>
        <div><img class="zoomIn" v-scroll="handleScroll" style="transition-delay: .2s;" src="../assets/img/outbrain.png" alt=""></div>
        <div><img class="zoomIn" v-scroll="handleScroll" style="transition-delay: .3s;" src="../assets/img/revcontent.png" alt=""></div>
        <div><img class="zoomIn" v-scroll="handleScroll" style="transition-delay: .4s;" src="../assets/img/taboola.png" alt=""></div>
        <div><img class="zoomIn" v-scroll="handleScroll" style="transition-delay: .5s;" src="../assets/img/snap.png" alt=""></div>
      </div>
  	</div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'
export default {
  name: 'Sponsors',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Sponsors'
</style>
