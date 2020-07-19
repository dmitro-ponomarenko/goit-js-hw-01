let country;
let price;
const userSelect = prompt ("Введите страну доставки товара");
if (userSelect === null) {
    alert("Отменено пользователем");
}
else{
    const userChange = userSelect.toLowerCase();

switch (userChange) {
    case "китай":
        сountry = 'Китай';
        price = 100;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case "чили":
        сountry = "Чили";
        price = 250;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case "австралия":
        сountry = "Австралию";
        price = 170;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case "индия":
        сountry = "Индию";
        price = 80;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    case "ямайка":
        сountry = "Ямайку";
        price = 120;
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;                   
    default:
        alert ('В вашей стране доставка не доступна');
        break;
    }
}
console.log(userSelect);