const isAdmin = true;
const canWrite = true;
console.log(`Системный файл ${isAdmin&&canWrite}`);
console.log(`Обычный файл ${isAdmin||canWrite}`);

const isEdited = true;
console.log(`Системный файл с редактировнаием ${isAdmin&&canWrite&&!isEdited}`);

const superAdmin = true; 
console.log(`Системный файл с редактировнаием ${isAdmin&&canWrite&&!isEdited||superAdmin}`);

let a;
const userName = a||'Петя';
console.log(userName);

const isAdmins= true;
const fileName = isAdmins&&'file.mp4';
console.log(fileName);


let age = 5;
console.log(age||18);
console.log(age ?? 18);


const balance=5000;
const bonusBalance = 90;
const isBanned = false;
const isExist=false;
const isSelling = true;
console.log((balance>1000||bonusBalance>100) && !isBanned && !isExist&& isSelling);
