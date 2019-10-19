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
var add=function(){
    Vue.set(vm.items, vm.items.length, data1);
}
var change=function(){
    if (vm.items.length > 0) {
        vm.items.splice(vm.items.length-1, 1, data2);
    }
}
var del=function(){
    vm.items.splice(vm.items.length-1, 1);
}
var swap=function(){
    if (vm.items.length-1 > 0) {
        tmp_data=vm.items[0]
        vm.items.splice(0, 1, vm.items[vm.items.length-1]);
        vm.items.splice(vm.items.length-1, 1, tmp_data);
    }
}

// Vue.js オブジェクト作成
var vm=new Vue({
    el:'#app',
    data:{
        items:[]
    }
});
