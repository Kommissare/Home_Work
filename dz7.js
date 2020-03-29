// 1. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let button = document.querySelector('button');
button.addEventListener('click', function () {
    button.style.display = 'none';
});
// 2. Используя JavaScript, сделайте так, чтобы при клике на кнопку
//  исчезал элемент с id=hide;
let elem = document.querySelector('#hide');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    elem.style.display = 'none';
})
// 3. --

// 4. Напишите код, который запрещает прокрутку страницы при помощи мыши и клавиш.
document.onmousewheel = document.onwheel = function () {
     return false;
}

document.addEventListener ('mousewheel', function () {
    return false;
}, false)

document.onkeydown = function (elem) {
    if (elem.keyCode >= 33 && elem.keyCode <= 40);
    return false;
}

// 5. задача переместить элемент в координаты клика мышки.
// Т.е. пользователь кликает и элемент (div, например) передвигается туда.
let elem = document.querySelector('#elem');
document.onclick = function (e) {
    elem.style.left = e.pageX + 'px';
    elem.style.top = e.pageY + 'px';
}


// 6. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую 
// в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так,
//  чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно 
//  работать и для вновь добавленных li. Задачу решите с помощью делегирования
//   (то есть событие должно быть навешано на ul).

let ul = document.querySelector('ul');

ul.addEventListener('click', function () {
    event.target.innerHTML = event.target.innerHTML + '!';
})

let button = document.querySelector('button');
button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = 'пункт';
    ul.appendChild(li);
})

// 7. Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей
// сделайте форму, с помощью которой можно будет добавить нового юзера в
// таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt,
// с помощью которого можно изменить текст ячейки. Задачу решите с помощью
// делегирования (то есть событие должно быть навешано на table).

let div = document.querySelector('div');
div.onmousemove = func;

function func(event) {
    this.innerHTML = 'X:' + event.clienX + '; Y:' +event.clienY;
}



// Задачи для решения

// На координаты
// 1. Повторите поведение страницы по данному образцу:

window.addEventListener('mousemove', go);
function go(event) {
    document.getElementById('show').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
}

// 2. Повторите поведение страницы по данному образцу:

window.addEventListener('click', move);
function move(event) {
    let elem = document.getElementById('elem');
    elem.style.left = event.clientX+'px';
    elem.style.top = event.clientY+'px';
}


// 3. Повторите поведение страницы по данному образцу:
window.addEventListener('click', function move(event) {
    let elem = document.getElementById('elem');
    elem.style.left = (event.clientX - parseInt(window.getComputedStyle(elem, "").width)/ 2)+ 'px';
    elem.style.top = (event.clientY - parseInt(window.getComputedStyle(elem, "").height) / 2)+ 'px';
})

// 4. Повторите поведение страницы по данному образцу:

let input = document.getElementById('input');
let div = document.getElementById('elem');

input.onkeypress = go;

function go(event) {
   let key = event.keyCode;
   div.innerHTML = key;
}

// 5. Повторите поведение страницы по данному образцу:

let input = document.getElementById('input');
let elem = document.getElementById('elem');

input.onkeypress = go;
function go(event) {
    key = String.fromCharCode(event.which);
    elem.innerHTML = key;
}

// 6. Дан элемент. Сделайте так, чтобы по клику на него он красился в
//  красный цвет, но только если в момент клика нажата клавиша Ctrl.

let elem = document.getElementById('elem');
elem.addEventListener('click', function () {
    if(event.ctrlKey) {
        elem.style.color = 'red';
    }
})

// 7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише
//  Ctrl - в его текст записывалось '1', при нажатой клавише Alt
//   - '2', а при нажатой клавише Shift - '3'.

let elem = document.getElementById('elem');
elem.addEventListener('click', function() {
    if(event.ctrKey) {
        elem.innerHTML + '1';
    }
    if(event.altKey) {
        elem.innerHTML += '2';
    }
    if(event.shiftKey) {
        elem.innerHTML += '3';
    }
})

// 8. Дан инпут. В него вводится текст и нажимается клавиша Enter
//  (ее код имеет номер 13). Сделайте так, чтобы по нажатию Enter
//   введенный текст попадал в абзац под инпутом, а содержимое инпута
//    очищалось.

let input = document.getElementById('input');
let p = document.querySelector('p');

input.addEventListener('keyup', function(e){
    if(e.keyCode === 13) {
        p.innerHTML = this.value;
        this.value = '';
    }
})
