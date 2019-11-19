<template>
  <section class="video">
    <div class="container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NJdQJ1DeHyQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2>Let's go:</h2>
      <button class="btn" @click="showForm(true)">Let's Work Together</button>
    </div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'
export default {
  name: 'Video',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Video'
</style>
