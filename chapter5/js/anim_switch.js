new Vue({
  el: '#app',
  data: {
    id: 0,
    panels: [
      'WINGSプロジェクトは、ライター...',
      '山田著作の書籍に関するFAQ情報、...',
      '環境設定については、ページ上部。。。'
    ]
  },
  methods: {
    onclick: function() {
      this.id = (this.id + 1) % this.panels.length;
    }
  }
})
