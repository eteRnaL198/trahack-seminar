/*
map() | 新しい配列を作る
・配列をイテレートする
・要素１つずつに処理
・新しい配列を生成
*/

const array = [1, 2, 4, 8];
const resultArray = array.map(x => x * 2);
console.log(resultArray);

const obj = {
    "hoge": {text: "fuga"},
    "foo": {text: "bar"},
    "fiz": {text: "buzz"}
};
const objectArray = Object.keys(obj).map(key => {
    const value = obj[key];
    value['id'] = key;
    return value;
});
console.log(objectArray);


/*
filter() | 条件に合う要素を抽出
・配列をイテレートする
・条件がtrueの要素のみ返す
*/

const result = objectArray.filter(object => {
    return object.id === 'hoge' //条件式
});

console.log(result);//配列が返ってくる
console.log(result[0]);//オブジェクトが返ってくる


/*
findIndex() | 要素の何番目かを知る(条件に合った要素の番号)
・配列をイテレートする
・条件がtrueの要素が「何番目なのか」を返す
*/

const index = objectArray.findIndex(object => {
    return object.id === 'hoge'//条件式
});

console.log(index, objectArray[index]);


/*
test() | マッチする文字列か判定
・正規表現を使う
・マッチする→trueを返す
・マッチしない→falseを返す
*/

const torahack = 'torahack';
const charahack = 'charahack';
const regex = RegExp('tora*');

console.log(regex.test(torahack));
console.log(regex.test(charahack));
console.log(/chara*/.test(charahack));//正規表現を直接記述

const isTora = regex.test(torahack);
if(isTora) {
    console.log('私はトラハックです');
} else {
    console.log('私はトラハックではありません');
}