Vue.component('my-hello', {
  props: ['yourName'],
  template: '<div>こんにちは、{{ yourName }}さん！</div>'
});

Vue.component('my-counter', {
  props: [ 'init' ],
  template: '<div>現在地は{{ current }}です！<input type="button" v-on:click="onclick" value="増やす" /></div>',
  data: function() {
    return {
      current: this.init
    };
  },
  methods: {
    onclick: function() {
      this.current++;
    }
  }
});

Vue.component('my-hello_2', {
  template: '<div title="result" class="main">こんにちは、Vue.js!</div>'
})

new Vue({
  el: '#app'
});