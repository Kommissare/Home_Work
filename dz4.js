// 1. Клонирование массива
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.



let numbers = [1, 3, 5, 7, 9];

function arrayClone(arr) {
    return arr.slice(0);
};

let arr1 = arrayClone(numbers);

console.log(arr1);


// 2. Преобразование массива в строку
// // Напишите код, который преобразовывает и объединяет все элементы массива 
// в одно строковое значение. Элементы массива будут разделены запятой. 
// Получите результат двумя разными методами.


let arr = ['Hello', 'How are', 'you'];

let str = arr.join();
let str1 = arr.toString();

console.log(str, str1);

// 3. Заполните массив 10-ю иксами с помощью цикла.

let arr = [];

for(let i = 0; i < 10; i++) {
    arr.push('x');
}

console.log(arr);

// 4. Заполните массив числами от 1 до 10 с помощью цикла

let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);

//  5. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
//  Дроби округляйте до двух знаков в дробной части.


let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push(Math.random().toFixed(2));
}

console.log(arr);


// 6. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 

let arr = [];
for(let i = 1; i <=10; i++) {
    arr.push(Math.round(Math.random() * 10) + 1);
}

console.log(arr);


// 7. Дан массив с числами. С помощью цикла выведите только те элементы массива,
//  которые больше нуля и меньше 10-ти. 

let arr = [-3,-1,1,3,5,7,9,11,13,15];

for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10); {
        console.log(arr[i]);
    }
}

// 8. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
//  Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.
//   Если такого элемента нет - ничего не выводите.

let arr = [-3,-1,1,3,5,7,9,11,13,5,15];

for(let i = 0; i < arr.length; i++); {
    if(arr[i] === 5) {
        alert("Hey!");
        break;
    } 
}

// 9. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr = [3,5,3,2,1,9];
let a = 0;

for (let i = 0; i < arr.length; i++); {
    a += arr[i];
}

console.log(a);


// 10.  Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

let arr = [3,5,3,2,1,9]; 
let a = 0;

for(let i = 0; i < arr.length; i++) {
    a += arr[i] * arr[i];
}

console.log(a);

// 11. Дан массив с числами.
//  Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

let arr = [12, 23, 22, 11, 3, 5];
let a = 0;

for(let i = 0; i < arr.length; i++) {
    a += arr[i];
}

let b = a / arr.length;

console.log(b);

// 12. Пользователь вводит многозначное число через promt.
//  Напишите функцию colonOdd(num), которая принимает число num
//   в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
//   Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

let num = prompt("Многозначное число", 55);

function colonOdd(num) {
    let str = num.toString();
    let result = [str[0]];
    for(let i = 0; i < str.length; i++) {
        if((str[i-1] % 2 !== 0) && (str[i] % 2 !== 0)) {
            result.push(':', str[i]);
        } 
        else {
            result.push(str[i]);
        }
    } return result.join('');
    
} console.log(colonOdd(num));

// 13. Напишите функцию removeDuplicates(arr), которая возвращает массив,
//  в котором удалены повторяющиеся элементы из массива arr 
//  (игнорируйте чувствительность к регистру). 

// 14. Напишите функцию getFirst(array, n), которая возвращает фрагмент массива,
//  содержащий первые 'n' элементов массива.


var array = [1,2,3,4,5,6,7,8,9];

function getFirst(array, n) {
    if (array == null) return false;
    if (n == null) return array[0];
  return array.slice(0, n);
};

console.log(getFirst(array, 7));




// 15. Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих 
// собой сумму соответствующих элементов заданных массивов.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];
let arr3 = [];
if (arr1.length > arr2.length) {
    var count = arr1.length;
} else {
    var count = arr2.length;
}
for (var i = 0; i < count; i++) {
    if (arr2[i] === undefined) {
        arr2.push(0);
    } else {
       if (arr1[i] === undefined) {
          arr1.push(0);
        }
        }
        arr3.push(arr1[i] + arr2[i]);
      }
console.log(arr3)




// 16. -

// 17. -

// 18. Напишите функцию compareNumbers(arr), которая возвращает массив,
//  элементы которого отсортированы по убыванию их значений.

function compareNumbers(arr) {
    var arr = arr.sort(function(a, b) { 
        return a-b;
    }) 
    console.log(arr);
}

let arr1 = [5, 9, 11, 12, 14, 22, 1, 3, 7];
compareNumbers(arr1);

// 19. Напишите функцию sumOfSquares(arr),
//  которая возвращает сумму квадратов значений массива.

function sumOfSquares(arr) {
    return arr.reduce(function(prev, cur) {
        return prev + cur * cur;
    })
}

let num = [1,5,7,9,10,15];
console.log(sumOfSquares(num));

// 20. Напишите код, который определяет сумму и произведение значений массива.

let arr = [1,2,3,4,5,6];

let sum = arr.reduce(function(prev, cur) {
    return prev + cur;
})

let sum1 = arr.reduce(function(prev, cur) {
    return prev * cur;
})

console.log(`Сумма = ${sum},  произведение = ${sum1}.`);


// 21. Напишите функцию filterFalse(arr), которая очищает массив от ложных (false)
//  значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
// •	Переместить элемент массива из одной позиции в другую

function filterFalse(arr) {
    return arr.filter(Boolean);
}

let arr = [NaN, 0, 77, false, -17, '',undefined, 99, null];
console.log(filterFalse(arr));

// 22. Напишите функцию moveElement(arr,from,to), которая позволяет переместить
//  элемент массива из позиции from в позицию to.

function moveElement(arr,from,to) {
    arr.splice(to,0,arr.splice(from,1)[0]);
    return arr;
};
  
let arr = [ 'a', 'b', 'c', 'd', 'e'];
console.log(moveElement(arr,2, 3))

// 23. Напишите функцию generateNumbers(start, len), которая генерирует массив
//  заданной длины len, заполненный целыми числами, где каждое 
//  число больше предыдущего на единицу.

function generateNumbers(start, len) {
    let arr = new Array(len);
    for(let i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;

}
console.log(generateNumbers(0, 10));

// 24. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
//  Использую метод reduce() напишите функцию currentSums(numbers),
//   которая возвращает новый массив из такого же числа элементов,
//    в котором на каждой позиции будет находиться сумма элементов 
//    массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(numbers) {
    let result = [];
    numbers.reduce(function(prev, cur, i) {
        return result[i] = prev + cur;
    }, 0);
    alert(result);
}
console.log(currentSums(numbers))

// 25. Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

// 26.  Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);

// 27. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// 28. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let arr = ['js', 'css', 'jq'];
let arr2 = arr.pop();
console.log(arr2);

// 29. Дан массив [1, 2, 3, 4, 5]. С помощью метода
//  slice запишите в новый элементы [4, 5].
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(3);
console.log(arr1);

// 30. Дан массив [1, 2, 3, 4, 5].
//  С помощью метода splice преобразуйте массив в [1, 4, 5].
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// 31. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(1, 3);
console.log(arr1);

// 32. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let arr = [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log(arr[1][0]);

// 33. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js[0]);

// 34. Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
let arr = ['a', 'b', 'c'];
alert(arr);

// 35.  С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
let arr = ['a', 'b', 'c'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 36.  Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// let arr = ['a', 'b', 'c', 'd']



// 37.  Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
//  а третий элемент на четвертый. Результаты сложите, присвойте переменной result.
//   Выведите на экран значение этой переменной.

let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);
