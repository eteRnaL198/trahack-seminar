const setDomElementModule = (() => {
    let counter = 1;
    return {
        //innerText
        //DOM要素内のテキストを取得・設定できる
        setInnerText: (id) => {
            const element = document.getElementById(id);
            console.log(element.innerText);
            element.innerText = 'fuga';
            console.log(element.innerText);
        },
        //innerHTML
        //DOM要素内のHTMLを取得・設定できる
        //HTMLはバッククォーテーションで書く
        setInnerHTML: (id) => {
            const element = document.getElementById(id);
            const literal = '書換済み';
            console.log(element.innerHTML);
            element.innerHTML = `<p id="child">HTMLごと${literal}</p>`
            console.log(element.innerHTML);
        },
        //setAttribute('変更対称の属性名', '変更する値')
        //DOM要素の属性を設定できる
        //画像を入れ替える時によく使う
        replaceImageSrc: (id) => {
            const element = document.getElementById(id);
            element.setAttribute('src', 'https://drive.google.com/uc?export=view&id=1E8jqnNgvDPqtqZ3wH6-QuoOmPN8xjwP8');
        },
        //insertAdjacentHTML()
        //指定したDOM要素の相対的な位置にHTMLを挿入する
        //beforebegin:自身の直前
        //afterend:自身の直後
        //afterbegin:子要素の先頭
        //beforeend:子要素の末尾 →リストの子要素をどんどん追加していく
        appendChildNode: (id) => {
            const element = document.getElementById(id);
            element.insertAdjacentHTML(
                'afterbegin',
                `<li>${counter}つ目の子要素</li>`
            )
            counter++;
        }
    }
})();