// ------ Работа с классами
// 1.Дан элемент #elem. Добавьте ему класс www.
elem.classList.add('www');

// 2. Дан элемент #elem. Удалите у него класс www.
 elem.classList.remove('www');

// 3.  Дан элемент #elem. Проверьте наличие у него класса www.
elem.classList.contains('www');

//4.  Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
elem.classList.toggle('www');

//  5. Дан элемент #elem. Узнайте количество его классов.
elem.classList.length;

//6.   Дан элемент #elem. Выведите последовательно алертом его классы.

for(let i = 0; i < elem.classList.length; i++) {
    alert(elem.classList[i]);
}

// ----- Работа с CSS
// 7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. 
elem.style.color = 'red';
elem.style.fontSize = '30px';
elem.style.border = '1px solid red';

// ----- Свойство tagName
// 8. Дан элемент #elem. По клику на него выведите название его тега.
<p id="elem" class='www ccc wwwa' onclick="clickElem()">Its my HomeWork</p> 

function clickElem() {
    alert(elem.tagName);
}
//  9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
<p id="elem" class='www ccc wwwa' onclick="ElemLowerCase()">Its my HomeWork</p>

function ElemLowerCase() {
   alert(elem.tagName.toLowerCase());
} 
// 10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
let elem = document.getElementsByClassName('elem');
for(let i = 0; i < elem.length; i++) {
    elem[i].innerHTML == elem[i].innerHTML + '' + elem[i].tagName.toLowerCase()
}
alert(elem);
// 11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.
let parent = document.querySelector('#parent');
let li = document.createElement('li');
li.innerHTML = 'Пункт';
parent.appendChild(li);
// 12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
let arr = ['hello', 'what\'s', 'up', '?'];
let parent = document.querySelector('#parent');

for(let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    parent.appendChild(li);
}


// 13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
//  чтобы каждый элемент стоял в своем li. Сделайте так, чтобы 
//  к вставляемым li было привязано следующее событие: по нажатию на
//   li она должна вывести на экран свой текст.

let arr = ['man', 'women', 'child', 'grandpa'];
let parent = document.querySelector('#parent');

for(let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    parent.appendChild(li);
    parent.addEventListener('click', clickEvent);
}

function clickEvent() {
    alert(parent.innerHTML);
}

//14. Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
let parent = document.getElementById('parent');
let before = document.getElementById('elem');
let li = document.createElement('li');
li.innerHTML = '!!!';

parent.insertBefore(li, elem);

// 15.  Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
let elem = document.querySelector("#elem");
elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
// 16. Дан элемент #elem. Вставьте после него span с текстом '!!!'.
let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('afterend', '<span>!!!</span>');
// 17. Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.
let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');
 // 18. Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.
let elem = document.querySelector('#elem');
elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');

//  19. Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
let elem = document.querySelector('#elem');
elem.firstElementChild.style.color = 'red';
// 20.  Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
let elem = document.querySelector('#elem');
elem.lastElementChild.style.color = 'red';
// 21.  Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
let elem = document.querySelector('#elem');
let childs = elem.children;
for(let i = 0; i < childs.length; i++) {
    childs[i].innerHTML += '!';
}

//  Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
let elem = document.querySelector('#elem');
elem.previousElementSibling.innerHTML += "!";

//  Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
let elem = document.querySelector('#elem');
elem.nextElementSibling.innerHTML += "!";
//  Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
let elem = document.querySelector('#elem');
elem.nextElementSibling.nextElementSibling.innerHTML += "!";

//  Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
let elem = document.querySelector("#elem");
elem.parentElement.style.cssText = "background-color: red;";

//  Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
let elem = document.querySelector('#elem');
elem.parentElement.parentElement.style.cssText = "background-color: red;";

// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
let parent = document.querySelector('#parent');
let elem = document.querySelector('#child');
let button = document.querySelector('button');

button.addEventListener('click', function clickButton(click) {
    parent.removeChild(elem);
})

//  Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
let parent = document.querySelector("ol");
let elem = parent.children;
let button = document.querySelector('button');
button.addEventListener('click', function deleteLastChild(click) {
    parent.removeChild(elem[elem.length -1]);
});
//  Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
let parent = document.querySelector('ol');
let elem = document.querySelector('#child');

elem.addEventListener('click', function clickRemove (click) {
    elem.remove();
});

//  Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
let parent = document.querySelector('ol');
let elem = parent.children;

for(let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function clickDelete (click) {
        this.parentElement.removeChild(this);
    })
}

 // Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
let parent = document.querySelector('#parent');
let elem = parent.querySelector('#child');
let clone = elem.cloneNode(true);
let button = document.querySelector('button');

button.addEventListener('click', function clickCopy(click) {
    parent.appendChild(clone);
})


//  Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
let arr = [1,2,3,4,5];
let arrList = document.createElement('ul');
for(let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    arrList.appendChild(li);
}

document.body.appendChild(arrList);
//  Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
let put = document.querySelector('input');
let butt = document.querySelector('button');

butt.addEventListener('click', function createInput() {
    let clone = put.cloneNode(true);
    butt.parentElement.appendChild(clone);
});
//  Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
let text = document.querySelector('input[type = "text"]');
let submit = document.querySelector('input[type ="submit"]');
text.addEventListener('blur', function () {
    let clone = text.cloneNode(true);
    clone.value = text.value;
    text.parentElement.appendChild(clone);
}) // ???

//  Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
let parent = document.querySelector('ul');
let child = document.querySelector('li');
let butt = document.querySelector('button');

butt.addEventListener('click', function clickButton(){
    this.parentElement.style.cssText = 'display: none';
})


//  Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(elem.clientTop);
})
//  Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(elem.clientLeft);
});

//  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(elem.offsetWidth);
})
//  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(elem.offsetHeight);
});

//  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(elem.clientWidth);
})
//  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(elem.clientHeight);
})

//  Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding. Показать решение.
let elem = document.querySelector('#elem');
let style = getComputedStyle(elem);
alert(style.height + style.width);

    //  ||

let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert(getComputedStyle(elem).height + ' ' + getComputedStyle(elem).width);
});

//  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(elem.scrollTop);
})
//  Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен слева. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(elem.scrollLeft);
})
//  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    body.scrollTop = 100;
//  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его на 100px вниз от текущего положения. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    body.scrollTop += 100;

//  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(elem.scrollHeight);
})
//  Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(elem.scrollWidth);
})
//  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    let totalHeight = elem.scrollHeight;
    let neededHeight = totalHeight -100;
    elem.scrollTop = neededHeight;
})

//  Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(pageYOffset);
})
//  Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. Показать решение.
let elem = document.querySelector('#elem');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(pageXOffset);
})

//  Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    window.scrollTo(300, 500);
});
//  Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вниз от текущего положения. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    window.scrollBy(0, 300);
});
//  По нажатию на кнопку прокрутите страницу до самого низа. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
	window.scrollTo(0, document.body.clientHeight);
});
//  По нажатию на кнопку прокрутите страницу на 400px от текущего положения. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    window.scrollBy(0, 400);
});
//  По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function() {
    let body = document.documentElement;
    if( body.scrollHeight - body.scrollTop == body.clientHeight) {
        window.scrollTo(0, 100);
    }
});
//  Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза. Показать решение.
let elem = document.querySelector('#elem');
elem.addEventListener('click', function() {
	let startWidth = this.offsetWidth;
	let startHeight = this.offsetHeight;
	this.style.width = startWidth * 2 + 'px';
	this.style.height = startHeight * 2 + 'px';
})
//  Дана кнопка. По нажатию на у кнопку узнайте, есть ли у окна браузера вертикальная прокрутка. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(document.documentElement.clientHeight);
});
//  Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    let heightWindow = window.innerHeight;
    window.scrollBy(0, heightWindow);
});
//  Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка. Показать решение.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    alert(window.pageXOffset);
});



// shopping list 
let list = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let myItem = input.value;
    input.value = '';



    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listText.textContent = 'delete';
    list.appendChild(listItem);

    listBtn.onclick = function() {
    list.removeChild(listItem);
    }

    input.focus();
})
