new Vue({
  el: '#app',
  data: {
    todo: '',
    items: [
      '環境設定については、ページ上部。。。',
      '山田著作の書籍に関するFAQ情報、...',
      'WINGSプロジェクトは、ライター...',
    ]
  },
  methods: {
    onadd: function() {
      this.items.unshift(this.todo);
      this.todo = '';
    },
    onremove: function() {
      let that = this;
      this.items = this.items.filter(function(value) {
        return value !== that.todo;
      });
      this.todo = '';
    },
    onsort: function() {
      this.items.sort()
    }
  }
})
