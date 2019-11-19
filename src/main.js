import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  }
});

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  render: h => h(App),
  metaInfo: () => ({
    title: 'Golden Clix',
    meta: [
      { name: 'description', content: 'Hello' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0' },
      { name: 'author', content: 'MaxGloba' },
      { name: 'theme-color', content: '#000000' }
    ]
  })
}).$mount('#app')
