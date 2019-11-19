<template>
  <div id="app">
    <Header />
    <Banner />
    <Wehave />
    <Principles />
    <Sponsors />
    <Founders />
    <Futures />
    <Video />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Wehave from './components/Wehave.vue'
import Principles from './components/Principles.vue'
import Sponsors from './components/Sponsors.vue'
import Founders from './components/Founders.vue'
import Futures from './components/Futures.vue'
import Video from './components/Video.vue'
import Form from './components/Form.vue'

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    Wehave,
    Principles,
    Sponsors,
    Founders,
    Futures,
    Video,
    Form
  }
}
</script>

<style lang="scss" src="./assets/scss/base/_all.scss"></style>
