//Данный пример не работает с 'use strict',
/* a = 5;
console.log(a); */

//Переменные

/* console.log(leftBorderWidth);
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

console.log(second);
 */

 //Типы переменных------------------->

 var number = 2;
 var string = "hello";
 var sym = Symbol();
 var boolean = true;
 null;
 undefined;
 var obj = {};
 
 //Infinity-------------------------->
 console.log(4/0);
 
 //NaN (Not a null)------------------>
 console.log('string'*9);
 
 //Undefined ------------------------>
 let something;
 console.log(something);
 
 //Создаем объект-------------------->
 let person = {
     name: "John",
     age: 25,
     isMarried: false
 };
 console.log(person.name);
 console.log(person["age"]); //"jshint" советует первый вариант с применением точки
 
 //Спец.объект -> Array(Массив[])---->
 let arr = ['plum.png','orange.jpg','apple.bmp'];
 console.log(arr[1]);
 console.log(arr[2]);

//Alerts----------------------------->
  /* alert ("Hello World"); */  

//Подтверждение true or false имеет кнопки "ОК" и "Отмена"
 /* let answer = confirm("Are you here?");
 console.log(answer); */ 

//Определяем тип результата с помощью typeof
 /* let answer = prompt("Есть ли вам 18 лет", "Да");
 console.log(typeof(answer)); */ 

 //<---------------------------------ОПЕРАТОРЫ------------------------->

 //Сложение---------------------------------->
 console.log("arr" + "-Object");
 console.log(4 + "-Object");
 //Результат сложения = Строка "arr-Object" и "4-Object"

 //Инкременты и декременты------------------->
 let incr = 10,
     decr = 10;
incr++; //увеличивает значение переменной на 1
decr--; //уменьшает значение переменной на 1
console.log(incr); //результат 11
console.log(decr); //результат 9

// "%"" - остаток от деления двух чисел------>
console.log(7%4);

//== и === ---------------------------------->
console.log("2" == 2); //Сравнивает по значением и там, и там двойки
//Результат true
console.log("2" === 2); //Сравнивает по типу данных
//Результат false

//Оператор && (и)----------------------------> 
let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);//Результат false
//возвращает true если все аргументы являются правдивыми

//Оператор || (или)-------------------------->
let start = true,
    done = true;
console.log(start || done);
//возвращает true если хоть один аргумент является правдивым

//Знак отрицания ! -------------------------->
/* Изменяет значение переменной, 
так если поставить !перед start и done 
значение true изменится на false */
console.log(!start || !done);
 
//Условия if(){}----------------------------->
if(2*4 == 7){
    console.log("Верно");
} else{
    console.log("Неверно");
}

//Вложенные условия--------------------------> 
let num = 50;
if (num < 49){
    console.log("Мало");
} else if (num > 51){
    console.log("Много");
} else{
    console.log("Верно");
};

//Тернарный оператор------------------------->
(num == 50) ? console.log("Верно") : console.log("Неверно");

//Switch (более удобен для большого колличества условий)
switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 51:
        console.log("Неверно");
        break;
    case num = 50:
        console.log("Verno");
        break;   
    default:
        console.log("something wrong");
        break;    
}

/* while (num < 55) {
    console.log(num);
    num++;
} */

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++){
    if (i == 6){
        break; //Прерывание цикла  результат: 1, 2, 3, 4, 5
        continue; // Продолжить цикл после i==6
    }
    console.log(i);
}




