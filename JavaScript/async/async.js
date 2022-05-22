const getGitUsername = async() => {
    const message = 'GitのユーザーIDは';
    const url = 'https://api.github.com/users/eternal198';

    const json = await fetch(url)
        .then(res => {
            console.log('非同期処理 成功');
            return res.json();
        }).catch(error => {
            console.error('非同期処理 失敗', error);
            return null;
        });
    
    const username = json.login;
    console.log(message + username);
}

getGitUsername();