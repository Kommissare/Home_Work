// // Создайте 4 любые математические функции  с как минимум одним параметром функции.

// function multiplication (num1, num2) {
//     num1 = num1 * num2;
//     return num1;
// }

// alert(multiplication(7,765));

// function rounding (num) {
//     return Math.floor(num);
// }

// alert(rounding(8.55));

// function helloNumber(num1, num2, num3) {
//     return num1+num3*num2;
// }

// alert(helloNumber(2,5,7));


// function findNumber(num1, num2) {
//     num1 = num1 / num2;
//     return Math.floor(num1);
// }

// alert(findNumber(29, 7));

// // Создать 3 функции без параметров и returnпервая выводит ваше имя в консоль .лог
// // Вторая выводит в алерте Третья и в консол.лог и в алерте


// function showNameConsole () {
//     console.log('Dmitry');
// }

// showNameConsole();

// function showNameAlert () {
//     alert('Dmitry');
// }

// showNameAlert();

// function showNameDouble () {
//     console.log('Dmitry');
//     alert('Dmitry');
// }

// showNameDouble();



// // Суммы всех нечетных чисел в передаваемом числе


// let sum = 0;
// function sumNumber(number1) {
//     for(i=1; i <= number1; i++) {
//         if (i % 2 != 0) {
//             sum = sum + i;
//         }
//     }
// }


// sumNumber(100);

// alert(sum);


// // Нахождение наибольшего четного числа в передаваемом числе



// let number = +prompt ('Введите число: ');

// function findMaxNumber(num) {
//     if (num % 2 !== 0) {
//         alert(num - 1);
//     } else {
//         alert(num);
//     }
// }
// findMaxNumber (number);



// // Нахождение последнего нечетного числа в передаваемом числе

// function FindLastNumber(num) {
//     if (num % 2 === 0) {
//         alert (num - 1);
//     } else {
//         alert(num);
//     }
// }

// FindLastNumber(100);



// // Наименьшее из 5 переданных чисел

// function minNumber (num1, num2, num3, num4, num5) {
//     return Math.min(num1,num2,num3,num4,num5);
// }
// let result = minNumber(132, 231, 255, 200, 131);
// alert(result);


// // Наибольшее из трех переданных чисел

// function maxNum(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
    
// }
// let result = maxNum(15, 30, 55);
// alert(result);

// // Функция, которая получает число дня недели и выводит в алерт Название дня

// let dayNumber = +prompt('Введите цифру')

// function findDay(num) {
//     if (num == 1) {
//         alert('Понедельник')
//     } else if (num == 2) {
//         alert('Вторник');
//     } else if (num == 3) {
//         alert('Среда');
//     } else if (num == 4) {
//         alert('Четверг');
//     } else if (num == 5) {
//         alert('Пятница');
//     } else if (num == 6) {
//         alert('Суббота');
//     } else if (num == 7) {
//         alert('Воскресенье')
//     } else {
//         alert("Нужно ввести цифру от 1 до 7");
//     }
// }


// findDay(dayNumber);

// // Функция, которая выводит в консоль тип передаваемого параметра -строка,число и т.д


// function checkParam (test) {
//     console.log(typeof(test));
// }

// checkParam(null);

// // --- ?????

