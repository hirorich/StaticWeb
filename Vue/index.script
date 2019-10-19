// データ定義
var data1= {
    start:"00:05:00.000",
    end:"00:30:00.000",
    duration:"00:25:00.000",
    x:480,
    y:360,
    fadein:"00:00:05.000",
    fadeout:"00:00:10.000"
}
var data2= {
    start:"00:10:00.000",
    end:"00:25:00.000",
    duration:"00:15:00.000",
    x:800,
    y:600,
    fadein:"00:00:10.000",
    fadeout:"00:00:05.000"
}
var data=[data1, data2]
var func=function(val){
    if(val>=0 && val<data.length){
        return data[val];
    }
}
var func2=function(){
    if (vm.id==0){
        vm.id=1;
    }else if (vm.id==1){
        vm.id=2;
    }else{
        vm.id=0;
    }
}

// Vue.js オブジェクト作成
var vm=new Vue({
    el:'#app',
    data:{
        id:0,
        start:'00:00:00.000',
        end:'00:00:00.000',
        duration:'00:00:00.000',
        x:0,
        y:0,
        fadein:'00:00:00.000',
        fadeout:'00:00:00.000'
    },
    watch:{
        id:function(val){
            tmp=func(val)
            this.start=tmp.start
            this.end=tmp.end
            this.duration=tmp.duration
            this.x=tmp.x
            this.y=tmp.y
            this.fadein=tmp.fadein
            this.fadeout=tmp.fadeout
        }
    }
});
