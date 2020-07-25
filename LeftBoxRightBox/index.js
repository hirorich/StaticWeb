// Vue.js オブジェクト作成
var vm=new Vue({
    el:'#app',
    data:{
        idx:1,
        input_url:'../index.html#1',
        view_url:'../index.html',
        right_id:''
    },
    methods:{
        set_url: function() {
            this.input_url=this.input_url.trimRight().trimLeft();
            if (this.input_url.length==0) {
                return;
            }
            
            tmp_url=this.input_url.split('#');
            if (tmp_url.length!=2) {
                return;
            }
            
            this.view_url=tmp_url[0];
            try {
                this.idx=parseInt(tmp_url[1], 10);
            }
            catch(e) {
                this.idx=1;
            }
        },
        next_page: function() {
            this.idx+=1;
        },
        prev_page: function() {
            this.idx-=1;
        },
        download_image: function() {
            try {
                // 画像ファイルのURL取得
                right_document = document.getElementsByClassName('right-box').item('iframe').contentDocument;
                right_id_element = right_document.getElementById(this.right_id);
                if (right_id_element == null) {
                    throw 'id = ' + this.right_id + ' が存在しません'
                }
                try {
                    img_url = right_id_element.getElementsByTagName('img').item('src').src;
                }
                catch(e) {
                    throw '画像ファイルのURL取得に失敗しました'
                }

                // 画像ファイルの拡張子取得
                img_file_name=img_url.split('/').reverse()[0];
                img_file_split=img_file_name.split('.');
                if (img_file_split.length==0) {
                    throw '指定したファイル名に拡張子が含まれていません';
                }
                file_extension=img_file_split.reverse()[0];

                // 保存ファイル名指定
                file_name=this.idx + '.' + file_extension

                // 画像ファイルダウンロード
                downloadFromUrlAutomatically(img_url, file_name);
            }
            catch (e) {
                alert(e);
            }
        }
    },
    computed:{
        righturl: function() {
            return this.view_url + '#' + this.idx;
        },
        is_first_page: function() {
            return this.idx <= 1;
        }
    }
});

// ダウンロード関数
function downloadFromUrlAutomatically(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e){
        if(this.status == 200){
            var urlUtil = window.URL || window.webkitURL;
            var imgUrl = URL.createObjectURL(this.response);
            var link = document.createElement('a');
            link.href=imgUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        }
    };
    xhr.send();
};
