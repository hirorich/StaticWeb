// データ定義
var data1= {
    name:"data1",
    start:"00:05:00.000",
    end:"00:30:00.000",
    duration:"00:25:00.000",
    x:480,
    y:360,
    fadein:"00:00:05.000",
    fadeout:"00:00:10.000"
}
var data2= {
    name:"data2",
    start:"00:10:00.000",
    end:"00:25:00.000",
    duration:"00:15:00.000",
    x:800,
    y:600,
    fadein:"00:00:10.000",
    fadeout:"00:00:05.000"
}
var data3= {
    name:"data3",
    start:"00:15:00.000",
    end:"00:20:00.000",
    duration:"00:05:00.000",
    x:1920,
    y:1080,
    fadein:"00:00:15.000",
    fadeout:"00:00:00.000"
}

// Vue.js オブジェクト作成
var vm=new Vue({
    el:'#app',
    data:{
        checkNo:0,
        items:[
            {
                data:data1,
                selected:true
            },
            {
                data:data2,
                selected:false
            },
            {
                data:data3,
                selected:false
            }
        ]
    }
});
