// リストをシャッフル
var shuffle=function(array){
    for (var i=array.length-1; i>0; i--){
        var r = Math.floor(Math.random() * (i+1))
        if(r>=(i+1)){
            r=i
        }

        array.splice(i+1, 0, array[r])
        array.splice(r, 1)
    }

}

// Vue.js オブジェクト作成
var vm=new Vue({
    el: '#app',
    data: {
        items: [0,1,2,3,4,5,6,7,8,9],
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
            shuffle(this.items)
        }
    }
});
