new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田',
        }
    },
    created: function() {
        let that = this;
        this.timer = setTimeout(function() {
            // that.author.name = 'Y.YAMADA'
            Vue.set(that.author, 'company', 'WINGSプロジェクト');
        }, 3000);
    },

    beforeDestroy: function() {
        clearInterval(this.timer);
    }
});