function validation(username, password) {
    if (username && password) {
        if (username.length >= 6) {
            if (password.length >= 8){
                return true;
            }
            else {
                return alert('Пароль должен содержать 8 символов.')
            }
        }
        else {
            //console.log(username.length + ' or more characters');
            return alert('Логин должен содержать 6 символов');
        }
    } else {
        return alert(`Отсутсвует логин или пароль`);
    }
}

exports.validation = validation;