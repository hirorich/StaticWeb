// コンポーネント定義
const input_components = {
    data: function() {
        return {
            title: '',
            author_name: ''
        }
    },
    template: `
        <div>
            <div class="form-group">
                <span class="label label-default">タイトル</span>
                <input v-model="title" type="text" class="form-control">
                <span class="label label-default">作者名</span>
                <input v-model="author_name" type="text" class="form-control">
            </div>
        </div>
    `
}
