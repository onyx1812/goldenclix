<template>
  <section class="founders">
    <div class="container">
      <h2 class="zoomIn" v-scroll="handleScroll">Our Founders</h2>
      <div class="row">
        <div class="col">
          <img src="../assets/img/james.jpg" alt="James">
          <h3>James</h3>
        </div>
        <div class="col">
          <img src="../assets/img/rita.jpg" alt="Rita">
          <h3>Rita</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'
export default {
  name: 'Founders',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Founders'
</style>
