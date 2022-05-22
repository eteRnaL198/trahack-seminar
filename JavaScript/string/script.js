//split() 区切り文字 
const url = "https://torahack.web.app?uid=abcde12345"
const uid = url.split('?uid=')[1]
console.log(uid) // output: abcde12345


//slice() 一部を取り出す
const datetime = new Date();
console.log("Before:", datetime.toString());
const formattedDate = datetime.getFullYear() + '-'
                               + ('00' + (datetime.getMonth()+1)).slice(-2) + '-'
                               + ('00' + datetime.getDate()).slice(-2) //9月の合 009の後ろから２つ目以降の文字を取り出す;
console.log("After", formattedDate);


// .length 文字列の長さを表す
const comment = document.getElementById('comment');
const currentLength = document.getElementById('current-length');
comment.addEventListener('change', (event) => {
    const text = event.target.value;
    const length = text.length;
    currentLength.innerText = length;
})

// toLocaleString() 数値を文字列に変換する(3桁区切り)
const price = 19800
const localePrice = price.toLocaleString();
console.log("￥" + localePrice);

// replace() パターンにマッチした文字列を置換する
const returnCodeToBrTag = (text) => {
    return text.replace(/\r?\n/g, '<br>'); //改行コードを<br>に変換
}
const outputText = () => {
    const text = document.getElementById('text').value;
    const formattedText = returnCodeToBrTag(text);
    document.getElementById('result').innerHTML = formattedText;
}

