// Vue.js オブジェクト作成
var vm=new Vue({
    el: '#app',
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function () {
            var tmp_item = this.items
            var tmp_list = []
            var max_count=tmp_item.length
            var index=0
            for (var i=0; i<max_count; i++){
                index = Math.floor(Math.random() * tmp_item.length)
                if(index>=tmp_item.length){
                    index=tmp_item.length - 1
                }
                tmp_list.splice(i, 0, tmp_item[index])
                tmp_item.splice(index, 1)
            }
            this.items=tmp_list
        }
    }
});
