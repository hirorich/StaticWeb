// コンポーネント定義
const index_components = {
    components: {
        'input-components': input_components,
        'table-components': table_components
    },
    template: `
        <div>
            <div class="collapse show" id="collapse_sample">
                <input-components ref="input"></input-components>
            </div>
            <button class="btn btn-primary" v-on:click="sample_func()">サンプル関数</button>
            <button class="btn btn-primary" v-on:click="add_func()">追加</button>
            <table-components ref="table"></table-components>
        </div>
    `,
    methods:{
        sample_func: function(){
            alert(this.$refs.input.title);
            $('#collapse_sample').collapse('toggle');
        },
        add_func: function(){
            add_data = {
                title: this.$refs.input.title,
                author_name: this.$refs.input.author_name
            }
            this.$refs.table.add_func(add_data);
        }
    }
}

// 定義したコンポーネントを登録
var sample_var = new Vue({
    el: '#sample-components',
    components: {
        'index-components': index_components
    }
})
