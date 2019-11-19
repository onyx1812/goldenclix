<template>
  <section class="principles">
  	<div class="container">
  		<h2 class="fadeInLeft" v-scroll="handleScroll">Our 3 guiding principles</h2>
  		<div class="row">
  			<div class="col fadeInUp" v-scroll="handleScroll">
  				<h3>Measure twice <br> cut once</h3>
  				<p>We do our homework and planning before we go into battle, so we avoid mistakes that cost money once campaigns are live</p>
  			</div>
  			<div class="col fadeInUp" v-scroll="handleScroll" style="transition-delay: .1s;">
  				<h3>Respect the money <br> (spend slow)</h3>
  				<p>We treat your money like our own, carefully. We are judicious and cautious which means spending as small as possible until its time to scale</p>
  			</div>
  			<div class="col fadeInUp" v-scroll="handleScroll" style="transition-delay: .2s;">
  				<h3>Stats <br> Don’t Lie</h3>
  				<p>We don’t do things based on feelings or guesses. Its all measured and managed according to the numbers.</p>
  			</div>
  		</div>
  	</div>
  </section>
</template>

<script>
import {formFun} from '../global/formFun.js'
export default {
  name: 'Principles',
  mixins: [formFun]
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/components/Principles'
</style>
