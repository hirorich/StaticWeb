function copyTextToClipboard(textVal){

    // テキストエリアを用意する
    var textBox = document.createElement("textarea");
    textBox.setAttribute("type", "hidden");

    // テキストエリアへ値をセット
    textBox.textContent = textVal;

    // 子要素にテキストエリアを配置
    document.body.appendChild(textBox);

    // 追加テキストエリアの値をコピー
    textBox.select();
    var retVal = document.execCommand('copy');

    // 追加テキストエリアを削除
    document.body.removeChild(textBox);

    // 処理結果を返却
    return retVal;
}
