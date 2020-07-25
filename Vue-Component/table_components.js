// コンポーネント定義
const table_components = {
    data: function() {
        return {
            list_data: []
        }
    },
    template: `
        <div>
            <table class="table table-striped table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>No.</th>
                        <th>タイトル</th>
                        <th>作者名</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in this.list_data">
                        <th>{{index}}</th>
                        <th>{{item.title}}</th>
                        <th>{{item.author_name}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    methods:{
        add_func: function(add_data){
            this.list_data.splice(this.list_data.length, 0, add_data);
        }
    }
}
