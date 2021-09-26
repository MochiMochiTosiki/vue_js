let dataLoggable = {
  mounted: function() {
    console.log(this.$data);
  }
}

Vue.component('my-comp', {
  data: function() {
    return {
      current: new Date()
    }
  },
  template: '<div>現在じこく：{{ current }}</div>',
  mixin: [ dataLoggable ]
});

new Vue({
  el: '#app'
})