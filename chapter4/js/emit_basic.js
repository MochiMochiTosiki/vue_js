Vue.component('my-counter', {
  props: [ 'step' ],
  template: '<button type="button" v-on:click="onclick"> {{ step }}</button>',
  methods: {
    onclick() {
      this.$emit('plus', Number(this.step));
    }
  }
});

Vue.component('my-input', {
  template: '<label>名前: <input type="text" /></label>'
  // template: '<input type="text" />'
});

new Vue({
  el: '#app',
  data: {
    current: 0
  },
  methods: {
    onplus: function(e) {
      // this.current += e;
      this.current += Number(e.target.textContent);
    },
    onfocus: function(e) {
      console.log(e);
    }
  }
});