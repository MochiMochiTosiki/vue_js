new Vue({
    el: '#app',
    data: {
        list: [ '赤パジャマ' , '青パジャマ', '黄パジャマ']
    },
    methods: {
      onclick: function() {
        // this.list[1] = '茶パジャマ';
        // Vue.set(this.list, 1, '茶パジャマ');
        this.list.shift();
      }
    }
})