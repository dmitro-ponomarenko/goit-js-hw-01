const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let answer = prompt('Enter password');
if (answer === null) {
    message = 'Отменено пользователем!';
}
 else if (answer === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else {
    message = "Неверный пароль!";
}
alert (message);