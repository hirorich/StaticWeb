// Vue.js オブジェクト作成
var inputinfo=new Vue({
    el:'#inputinfo',
    data:{
        info:{
            filename:"",
            link:""
        }
    },
    methods:{
        push: function(){
            var data={
                filename:this.info.filename,
                link:this.info.link
            }
            vm.items.splice(vm.items.length, 0, data);
            this.info.filename="";
            this.info.link="";
        }
    }
});

var vm=new Vue({
    el:'#app',
    data:{
        server:"https://www.youtube.com/user",
        items:[
            {
                filename:"任天堂",
                link:"/NintendoJPofficial/videos"
            },
            {
                filename:"アニプレックス",
                link:"/aniplex/videos"
            }
        ]
    },
    methods:{
        del: function(index){
            if (index >= 0 && index <this.items.length) {
                this.items.splice(index, 1);
            }
        },
        open: function(index){
            if (index >= 0 && index <this.items.length) {
                var link=this.items[index].link;
                var url=this.server + link
                window.open(url, '_blank')
            }
        }
    }
});
