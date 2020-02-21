// Vue.js オブジェクト作成
var vm=new Vue({
    el:'#app',
    data:{
        checkidx:0
        ,items:[
            {
                name:'Vue',
                url:'./Vue/'
            },
            {
                name:'Transition',
                url:'./Transition/'
            },
            {
                name:'Table',
                url:'./Table/'
            },
            {
                name:'ScrollTable',
                url:'./ScrollTable/'
            },
            {
                name:'CheckTable',
                url:'./CheckTable/'
            },
            {
                name:'RadioTable',
                url:'./RadioTable/'
            },
            {
                name:'AddableTable',
                url:'./v-modelText/'
            },
            {
                name:'Bootstrap-Tabs',
                url:'./Bootstrap-Tabs/'
            },
            {
                name:'Vue-Tabs',
                url:'./Vue-Tabs/'
            }
        ]
    },
    methods:{
        select: function(index) {
            this.checkidx=index;
        }
    },
    computed:{
        righturl: function() {
            return this.items[this.checkidx].url;
        }
    }
});