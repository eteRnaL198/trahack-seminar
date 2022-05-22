const regexModule = (() => {
    //正規表現オブジェクトの作り方

    // コンストラクタ記法
    // const regex = new RegExp(パターン, オプション)

    // リテラル記法
    //  const regex = /パターン/オプション

    const telWithHyphen = '080-1234-5678'
    const tel = telWithHyphen.replace(/[^0-9]/g, '')
    console.log(tel);
})();