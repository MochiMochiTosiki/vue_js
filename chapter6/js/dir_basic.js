Vue.directive('highlight', function(el, binding, vnode, oldVnode) {
    if (binding.value === binding.oldValue) { return; }
    console.log(binding.value);
    el.style.backgroundColor = binding.value;
  }
)

new Vue({
  el: '#app',
  directive: {
    highlight: {
      bind: function(el, binding, vnode, oldVnode) {
        el.style.backgroundColor = binding.value
      }
    }
  },
  data: {
    name: '名無しのコンベえ',
    color: 'yellow'
  }
})