new Vue({
    el: '#app',
    data: {
        name: '',
        upperName: ''
    },
    created: function() {
        let that = this;
        this.delayFunc = _.debounce(this.getUpper, 2000);
        let unwatch = this.$watch('name', function(newValue, oldValue) {
            that.delayFunc();
        });
      },
    // watch: {
    //     name: function(newValue, oldValue) {
    //         this.delayFunc();
    //     }
    // },
    methods: {
        getUpper: function() {
            this.upperName = this.name.toUpperCase();
        }
    }
});