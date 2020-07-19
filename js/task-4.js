let credits;
credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt("Введите количество дроидов");
if (quantity === null){
    alert('Отменено пользователем');
}
else if (quantity <= 7){
    alert(`Вы купили ${quantity} дроидов, на счету осталось ${credits%(quantity*pricePerDroid)} кредитов`);
}
else {
    alert('Недостаточно средств на счету');
}