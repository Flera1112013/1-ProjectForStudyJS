"use strict";
const money = 10;
const canBuy = money>50;
if(money>50){
    console.log('может купить продукт');
} else if(money>5){
    console.log('может купить  mini-продукт');
}
else{
    console.log('не хватает баланса');
}
console.log('Итог');

const depositUSD = 12000;
const rate = 0.07;
const HouseCostUSD= 13500;
const  depositLenght = 24;

const res = depositUSD*(1 + rate/12)**24;
if(res>HouseCostUSD){
    console.log(`Мы накопили: ${res}$.  
    Можем купить дом за ${HouseCostUSD}, останется на счету ${res - HouseCostUSD}}`);
} else{
    console.log('Мы не можем купить дом');
}

const role = 'manager';
if(role==='manager'){
    console.log('Manager');
} else if(role === 'admin'){
    console.log('Admin');
} else if(role === 'ceo'){
    console.log('CEO');
} else{
    console.log("We don`t know you");
}

switch(role){
    case 'manager':
        console.log('Manager');
        break;
    case 'admin':
        console.log('Admin');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default: 
        console.log("We don`t know you");
}

const bmwPrice = 100000;
const budget = 200000;
console.log(`I want to buy ${budget>bmwPrice? 'BMW':'Bycicle'}`);

const result = prompt('Сколько будет 7+ или -15?');
switch(result){
    case '-8':
        case '22':
        console.log("Вы - человек");
        break;
            default:
                console.log('Вы - робот');
            
}
