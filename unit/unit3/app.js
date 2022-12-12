"use strict";
const workHourInDay = 5;
const workDay = 5;
const projectHours = 40;
const haveWorkDay = 11;
const payRateUSD = 80;

const workHours = (haveWorkDay-2)*workHourInDay;

if(projectHours<workHours){
    console.log(true);

}    console.log(payRateUSD*projectHours);

console.log("Смогу ли я работать: "+ (projectHours<workHours));
console.log("Стоимость работы " + payRateUSD*projectHours + '$');





//шаблоны строк

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Пупкин';


const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = 'Проект \n'+'Цена: '+ price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);



//приведение типов

const age = '18';
console.log(age+5);

 //явная конвертация типов:
 console.log(Number(age)+5);
 //неявная конвертация - преобразование:
 console.log(age-5);

 const userName = 'Vasya';
 console.log(Number(userName)+ 5);
 console.log(typeof NaN);

// все числа в boolean кроме 0 true
 console.log(String(4)+7);
 console.log(Boolean(1));
 console.log(Boolean(0));


 console.log(Boolean(''));
 // проверка на пустоту строк - false, если строка пустая

 // Boolean true = 1; false = 0, соответсвенно:
 console.log(true+2); //равно 3

// False из других типов:
console.log(Boolean(0));
console.log(Boolean(''));
let a;
console.log(Boolean(a)); //undefind
console.log(Boolean(null));
console.log(Boolean(Number('sx')));