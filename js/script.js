// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

// let str = 'aaa@bbb@ccc';
// str = str.replace(/@/g,'!');
// console.log(str);

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

// let date = '2025-12-31';
// date = date.replace(/-/g,'/');
// date = date.replace(/(2025)(\/)(12)(\/)(31)/,'$5$4$3$2$1');
// console.log(date);

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

// let str = 'Я учу javascript!';

// let subStr = str.substr(str.indexOf('учу'),'учу'.length);
// let subStr2 = str.substr(str.indexOf('javascript'),'javascript'.length);

// console.log(subStr);
// console.log(subStr2);

// let subString = str.substring(str.indexOf('учу'), str.indexOf('javascript'));
// let subString2 = str.substring(str.indexOf('javascript'), str.indexOf('!'));

// console.log(subString);
// console.log(subString2);

// let subSlice = str.slice(str.indexOf('учу'), str.indexOf('javascript'));
// let subSlice2 = str.slice(str.indexOf('javascript'), str.indexOf('!'));

// console.log(subSlice);
// console.log(subSlice2);

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10.];
// let sum = 0;

// for(let i = 0; i < arr.length;i++){
//     sum = sum + Math.pow(arr[i],3);
// }

// console.log(sum);


// 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

// let a = 6;
// let b = 1;
// let c = Math.abs(a-b);

// console.log(c);

// const abs = function (a,b) {
//     let c = Math.abs(a-b);
//     return c;
// }

// console.log(abs(3,5));


// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).


// let dateNow = new Date();
// function date (num) {
//     if(num < 10) {
//         return '0' + num;
//     } else {
//         return num
//     }
// }
// let dateStr = date(dateNow.getHours()) + ':' + date(dateNow.getMinutes()) + ':' + date(dateNow.getSeconds()) + ' ' + date(dateNow.getDate()) + '.' + date(dateNow.getMonth()) + '.' + date(dateNow.getFullYear())

// console.log(dateStr)

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

// let str = 'aa aba abba abbba abca abea';
// str = str.replace(/ab+a/g,'*');
// console.log(str);

// 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.

//не работает

// let test = function(number){
//     let regexp = /^[3-7]{3}(\s|\-)[2-9]{2}(\s|\-)[0-9]{7}$/gi;
//     return regexp.test(number);
// }

// console.log(test('375-25-5275480'));

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия: 
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки; 
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени; 
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. 
// Функция должна возвращать true или false. Используйте регулярные выражения.

// let test = function(email) {
//     let regexp = /\w[a-z0-9\-_]{3,}\@[A-Z]{2,11}\.[a-z]{2,11}/gi;
//     return regexp.test(email);
// }

// console.log(test('fd-_fg@mkl.fyh'));