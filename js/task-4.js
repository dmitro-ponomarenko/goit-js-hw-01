let credits;
credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt("Введите количество дроидов");
let totalPrice = quantity * pricePerDroid;//Вирішив розділити загальну ціну і різницю
let remainder = credits - totalPrice;
if (quantity === null){
    alert('Отменено пользователем');
}
else if (totalPrice > credits){
    alert('Недостаточно средств на счету');
}
else {
    alert(`Вы купили ${quantity} дроидов, на счету осталось ${remainder} кредитов`);
} 
// Перепрошую, що не зробив так, як Ви мені порадили, в останню мить мені таке
//рішення даної задачі прийшло, не знаю чи вірно я роблю чи ні, але мені так воно сподобалося,
//що я просто не можу не поділитися ним з вами