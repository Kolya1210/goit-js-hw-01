

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt("Введите пароль");
 
if(userInput === null){
    console.log("Отменено пользователем!");
    
    
}else if(userInput === ADMIN_PASSWORD){
    message = "Добро пожаловать!"
    console.log(message);
    
}else{

    message = "'Доступ запрещен, неверный пароль!'"
    console.log(message);
    
}