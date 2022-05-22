const headerModule = (() => {
    let counter = 0;
    return {
        countUp: () => {
            counter++;
            console.log("現在のカウント", counter);
        },
        selectMenu: () => {
            console.log("ヘッダーのメニュー");
        }
    }
})();
