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
            var linkinfo={
                filename:this.info.filename,
                link:this.info.link
            }
            vm.items.splice(vm.items.length, 0, linkinfo);
            this.info.filename="";
            this.info.link="";
        }
    }
});

var vm=new Vue({
    el:'#app',
    data:{
        items:[
            {
                filename:"任天堂",
                link:"/NintendoJPofficial/videos"
            },
            {
                filename:"輝夜月",
                link:"/UCQYADFw7xEJ9oZSM5ZbqyBw/videos"
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
                var linkinfo=this.items[index];

                // filename をクリップボードにコピーする
                copyTextToClipboard(linkinfo.filename);

                // link を別タブで開く
                var link=linkinfo.link;
                var url=serverinfo.servers[serverinfo.checkserver] + link
                window.open(url, '_blank')
            }
        }
    }
});
