

const credits = 23580;
const pricePerDroid = 3000;


const userInput = prompt("Сколько дроидов вы хотите купить?");

const totalPrice = userInput*pricePerDroid;
const creditAmount = credits-totalPrice;

if(userInput === null){
    console.log('Отменено пользователем!');
    
}else if(totalPrice <= credits && Number(userInput) >= 1){
console.log(`Вы купили ${Number(userInput)} дроидов, на счету осталось ${creditAmount} кредитов.`);
}else if(totalPrice > credits && Number(userInput) >= 1){
    console.log(`Недостаточно средств на счете!`);
}else if(Number(userInput) < 1){
    console.log(`Введено некоректное число для оформления заказа!`);
}